# Event photos

Drop an image here named after the event's `slug` and it appears at the top of
that function's card on the Events page, replacing the drawn motif. No config
needed — the page picks it up by filename.

| File            | Function     |
| --------------- | ------------ |
| `mehendi.jpg`   | Mehendi      |
| `haldi.jpg`     | Haldi        |
| `engagement.jpg`| Engagement   |
| `sangeet.jpg`   | Sangeet      |
| `shaadi.jpg`    | Shaadi       |
| `vidaai.jpg`    | Vidaai       |
| `reception.jpg` | Reception    |

Cards render them at 16:9, cropped from the centre, so keep the subject away
from the edges. Run `npm run photos` after adding files to resize them.

You can add some and not others — any function without a file keeps its motif.

## If you are generating these with an AI image tool

Two things that make the difference:

1. **Avoid faces.** Generated people look wrong, and wrong faces on a wedding
   invitation are worse than no faces. Ask for detail shots, hands, objects and
   empty decorated spaces instead.
2. **Ask for the site's palette** so the seven images look like a set: warm
   ivory and cream, antique gold, soft natural light, shallow depth of field,
   photographic, no text.

Prompts that follow both, one per function:

- **Mehendi** — "Close-up of hands covered in intricate fresh henna patterns
  resting on cream silk, marigold petals scattered nearby, warm natural light,
  shallow depth of field, ivory and antique gold palette, photographic, no faces,
  no text"
- **Haldi** — "Brass bowls of bright turmeric paste on a cream cloth with fresh
  marigold garlands and a copper water pot, soft daylight, ivory and gold
  palette, photographic, no people, no text"
- **Engagement** — "Two gold wedding bands on an ivory silk cushion beside a
  small vase of white flowers, warm candlelight, shallow depth of field, gold and
  cream palette, photographic, no people, no text"
- **Sangeet** — "An Indian wedding dance floor at night, warm string lights and
  gold drapery, empty decorated stage, marigold garlands, bokeh, gold and ivory
  palette, photographic, no faces, no text"
- **Shaadi** — "A traditional Indian wedding mandap decorated with marigold and
  white flowers, sacred fire in a brass vessel, warm evening light, ivory and
  gold palette, photographic, no people, no text"
- **Vidaai** — "Handfuls of rice and rose petals in cupped hands over a cream
  sari border, soft afternoon light, gentle and wistful mood, ivory and gold
  palette, photographic, no faces, no text"
- **Reception** — "An elegant reception table set with gold-rimmed glassware,
  cream linen, white and gold floral centrepiece, warm evening light, bokeh
  background, photographic, no people, no text"
