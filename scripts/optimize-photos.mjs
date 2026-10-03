/**
 * Shrinks everything in public/photos/ to a sensible size for the web.
 *
 * Phone photos are routinely 4–8 MB, which makes the site painful to load on
 * mobile data — exactly the situation most of your guests will be in. This
 * resizes to 1400px on the long edge and re-encodes as progressive JPEG,
 * usually landing under 300 KB with no visible loss.
 *
 * Run: npm run photos
 *
 * Originals are moved to .photo-originals/ rather than overwritten, so this is
 * safe to run more than once. That directory sits outside public/ deliberately:
 * anything under public/ gets published, and shipping the full-size originals
 * would double the size of the deployed site for no benefit.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");
const ORIGINALS_DIR = path.join(process.cwd(), ".photo-originals");
// Wide enough that a full-bleed background still looks sharp on a large
// desktop display, without pushing file sizes past a few hundred KB.
const MAX_EDGE = 1800;
const QUALITY = 82;

const isImage = (name) => /\.(jpe?g|png|webp|heic|heif)$/i.test(name);

async function main() {
  let entries;
  try {
    entries = await fs.readdir(PHOTOS_DIR, { withFileTypes: true });
  } catch {
    console.error(`No such directory: ${PHOTOS_DIR}`);
    process.exitCode = 1;
    return;
  }

  const files = entries
    .filter((e) => e.isFile() && isImage(e.name))
    .map((e) => e.name);

  if (files.length === 0) {
    console.log("No photos found in public/photos/ — nothing to do.");
    return;
  }

  await fs.mkdir(ORIGINALS_DIR, { recursive: true });

  for (const name of files) {
    const source = path.join(PHOTOS_DIR, name);
    const before = (await fs.stat(source)).size;

    // Always end up with a .jpg, whatever went in (HEIC included).
    const outName = name.replace(/\.[^.]+$/, ".jpg");
    const tmp = path.join(PHOTOS_DIR, `.tmp-${outName}`);

    try {
      await sharp(source)
        .rotate() // honour EXIF orientation
        .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
        .toFile(tmp);
    } catch (error) {
      console.error(`✗ ${name} — ${error.message}`);
      await fs.rm(tmp, { force: true });
      continue;
    }

    await fs.rename(source, path.join(ORIGINALS_DIR, name));
    await fs.rename(tmp, path.join(PHOTOS_DIR, outName));

    const after = (await fs.stat(path.join(PHOTOS_DIR, outName))).size;
    const kb = (n) => `${Math.round(n / 1024)} KB`;
    console.log(`✓ ${name} → ${outName}  ${kb(before)} → ${kb(after)}`);
  }

  console.log(`\nOriginals kept in .photo-originals/ (not published).`);
}

main();
