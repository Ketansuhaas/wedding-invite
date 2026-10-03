# Photos

Drop your images here using exactly these filenames — the site looks for them
by name. Paths are configured in `src/config/wedding.ts`.

| Filename                    | Where it appears            | Best shape        |
| --------------------------- | --------------------------- | ----------------- |
| `couple-sanfrancisco.jpg`   | Home page hero, arched      | Portrait, 3:4     |
| `couple-snow.jpg`           | Our Story, "2024" moment    | Portrait, 4:5     |

Both are cropped with `object-cover` and centred, so faces near the middle of
the frame survive the crop best.

Keep each file under about 500 KB — resize to roughly 1200px on the long edge
before adding. Large photos make the page slow on phones.

To hide a photo until you have it, set its `src` to `""` in
`src/config/wedding.ts` and nothing will render.
