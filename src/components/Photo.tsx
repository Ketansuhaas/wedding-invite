import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

export type PhotoData = {
  /** Path under /public, e.g. "/photos/couple-snow.jpg". Empty hides the photo. */
  src: string;
  alt: string;
};

/**
 * Returns false when the file is not actually in /public.
 *
 * Without this a missing photo renders as a hollow box, which looks broken
 * rather than intentional. Because the whole site is statically exported, this
 * runs at build time — and in dev it runs per render, so dropping a file into
 * public/photos/ makes it appear on the next refresh.
 *
 * Server components only. Do not import Photo into a "use client" file.
 */
export function photoExists(src: string) {
  return fileExists(src);
}

function fileExists(src: string) {
  if (!src.startsWith("/")) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

/**
 * Photos go through next/image so the GitHub Pages base path is applied
 * automatically — a plain <img src="/photos/..."> would 404 on a project site.
 * Images are unoptimised (see next.config.ts), so `fill` inside a fixed aspect
 * ratio box avoids needing intrinsic dimensions.
 */
/**
 * The photograph sitting behind every page.
 *
 * Fixed rather than scrolling, so the image stays put while content moves over
 * it. The image is scaled up slightly because a CSS blur samples beyond the
 * element's edges and would otherwise fade to transparent at the borders, and
 * an ivory wash on top keeps body text legible over the photo's darker areas.
 *
 * Rendered at z-0 with the nav, main and footer above it — see layout.tsx.
 */
export function PageBackground({
  photo,
  /**
   * 0–100. Higher means the photo shows through less. This is the single knob
   * for how present the background reads — raise it if text starts to get lost
   * over the photo's darker areas.
   */
  washOpacity = 25,
  /** CSS blur radius in pixels. 0 leaves the photograph sharp. */
  blurPx = 0,
}: {
  photo: PhotoData;
  washOpacity?: number;
  blurPx?: number;
}) {
  if (!photo?.src || !fileExists(photo.src)) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <Image
        src={photo.src}
        alt=""
        fill
        sizes="100vw"
        priority
        // Only scaled up when blurred — a blur samples past the element's
        // edges and would otherwise fade out at the borders.
        className={blurPx > 0 ? "scale-105 object-cover" : "object-cover"}
        style={blurPx > 0 ? { filter: `blur(${blurPx}px)` } : undefined}
      />
      <div
        className="absolute inset-0 bg-ivory"
        style={{ opacity: washOpacity / 100 }}
      />
    </div>
  );
}

export function Photo({
  photo,
  /** "arch" for the hero portrait, "framed" for inline story photos. */
  shape = "framed",
  aspect = "aspect-[3/4]",
  className = "",
  sizes = "(max-width: 768px) 90vw, 384px",
  priority = false,
}: {
  photo: PhotoData;
  shape?: "arch" | "framed";
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  // Render nothing at all — including the wrapper's margins — so the layout
  // closes up cleanly rather than leaving a gap.
  if (!photo?.src || !fileExists(photo.src)) return null;

  const shapeClass = shape === "arch" ? "rounded-t-full rounded-b-lg" : "rounded-lg";

  return (
    <figure className={className}>
      <div
        className={`relative ${aspect} w-full overflow-hidden border border-line bg-cream/50 ${shapeClass}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </figure>
  );
}
