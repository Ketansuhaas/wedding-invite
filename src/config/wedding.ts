/**
 * Everything about the wedding lives here.
 *
 * Edit this one file and the whole site updates — you should not need to touch
 * any other file to change names, dates, venues, or questions.
 *
 * Anything marked TODO is a placeholder waiting for your real details.
 */

export type WeddingEvent = {
  /** Stable id used in links. Keep it lowercase with no spaces. */
  slug: string;
  name: string;
  /** ISO 8601 with timezone offset, e.g. "2027-01-28T19:00:00+05:30" */
  start: string;
  end?: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  address: string;
  mapsUrl: string;
  description?: string;
};

export const wedding = {
  // ---------------------------------------------------------------- couple
  partnerA: "Ketan",
  partnerB: "Triparna",
  tagline: "We're getting married",
  /** The small line above your names on the home page. */
  heroEyebrow: "Everyone we love, in one place",

  /** Drives the countdown — set to the Shaadi. */
  weddingDate: "2027-01-29T18:00:00+05:30",
  weddingDateLabel: "27 – 30 January 2027",
  city: "Raiganj, West Bengal",

  /** Shown at the top of the home page and Getting There. */
  welcome: {
    heading: "We would love to have you there for all our special days!",
    body: "Having successfully lived out of suitcases across multiple cities (and a few time zones), we’re officially calling a timeout to eat, celebrate, and make memories with family. And we definitely can’t do it without you!",
    provided:
      "We’ve got your accommodation and food covered, so all you need to do is show up with your most colorful outfits and your best party energy.",
  },


  /** Triparna first — she will have the faster, more accurate answers. */
  contacts: {
    primary: "Triparna",
    secondary: "Ketan",
    blurb:
      "Questions? Ask Triparna or Ketan. Try Triparna first if you would like answers that are fast and actually correct. Ketan will cheerfully do his best.",
  },

  // --------------------------------------------------------------- photos
  // Drop the files into public/photos/ using exactly these names.
  // Set `src` to "" to hide a photo until you have it.
  /** Shown in the footer, above your names, on every page. */
  footerPhoto: {
    src: "/photos/couple-snow.jpg",
    alt: "Ketan and Triparna holding on to each other in the snow",
  },
  /**
   * Sits blurred behind every page. Decorative, so it carries no alt text —
   * the site reads the same without it.
   */
  pageBackground: {
    src: "/photos/couple-cityhall.jpg",
    alt: "",
  },

  // ---------------------------------------------------------------- events
  // Everything except the Reception is in Raiganj; the Reception is in
  // Pondicherry, after the Vidaai.
  //
  // TODO: fill in the venue names and addresses — they all say TODO below.
  // Add or remove entries freely; the Events page and the home page summary
  // read from this one list.
  events: [
    {
      slug: "ashirvaad",
      name: "Ashirvaad",
      start: "2027-01-27T18:00:00+05:30",
      dateLabel: "Wednesday, 27 January 2027",
      timeLabel: "6:00 PM onwards",
      venue: "TODO: venue name",
      address: "Raiganj, West Bengal",
      mapsUrl: "https://maps.google.com/?q=Raiganj+West+Bengal",
      description:
        "The couple are blessed by all the elders of the family before starting this journey.",
    },
    {
      slug: "mehendi",
      name: "Mehendi",
      start: "2027-01-27T19:00:00+05:30",
      dateLabel: "Wednesday, 27 January 2027",
      timeLabel: "7:00 PM onwards",
      venue: "TODO: venue name",
      address: "Raiganj, West Bengal",
      mapsUrl: "https://maps.google.com/?q=Raiganj+West+Bengal",
      description: "Henna, music, and the start of the celebrations.",
    },
    {
      slug: "haldi",
      name: "Haldi",
      start: "2027-01-28T11:00:00+05:30",
      dateLabel: "Thursday, 28 January 2027",
      timeLabel: "11:00 AM",
      venue: "TODO: venue name",
      address: "Raiganj, West Bengal",
      mapsUrl: "https://maps.google.com/?q=Raiganj+West+Bengal",
      description: "Turmeric, teasing, and a great deal of noise.",
    },
    {
      slug: "engagement",
      name: "Engagement",
      start: "2027-01-28T19:00:00+05:30",
      dateLabel: "Thursday, 28 January 2027",
      timeLabel: "7:00 PM",
      venue: "TODO: venue name",
      address: "Raiganj, West Bengal",
      mapsUrl: "https://maps.google.com/?q=Raiganj+West+Bengal",
      description: "Rings exchanged, with the Sangeet following straight after.",
    },
    {
      slug: "sangeet",
      name: "Sangeet",
      start: "2027-01-28T20:00:00+05:30",
      dateLabel: "Thursday, 28 January 2027",
      timeLabel: "8:00 PM onwards",
      venue: "TODO: venue name",
      address: "Raiganj, West Bengal",
      mapsUrl: "https://maps.google.com/?q=Raiganj+West+Bengal",
      description:
        "Dinner, dancing, and performances nobody rehearsed nearly enough.",
    },
    {
      slug: "shaadi",
      name: "Shaadi",
      start: "2027-01-29T18:00:00+05:30",
      dateLabel: "Friday, 29 January 2027",
      timeLabel: "6:00 PM",
      venue: "TODO: venue name",
      address: "Raiganj, West Bengal",
      mapsUrl: "https://maps.google.com/?q=Raiganj+West+Bengal",
      description: "The main event.",
    },
    {
      slug: "vidaai",
      name: "Vidaai",
      start: "2027-01-30T14:00:00+05:30",
      dateLabel: "Saturday, 30 January 2027",
      timeLabel: "2:00 PM",
      venue: "TODO: venue name",
      address: "Raiganj, West Bengal",
      mapsUrl: "https://maps.google.com/?q=Raiganj+West+Bengal",
      description: "The send-off, and the last of the Raiganj celebrations.",
    },
    {
      slug: "reception",
      name: "Reception",
      start: "2027-02-02T19:00:00+05:30",
      dateLabel: "Tuesday, 2 February 2027",
      timeLabel: "7:00 PM onwards",
      venue: "TODO: venue name",
      address: "Pondicherry",
      mapsUrl: "https://maps.google.com/?q=Pondicherry",
      description:
        "In Pondicherry, after the Raiganj celebrations — and a very long photo queue.",
    },
  ] as WeddingEvent[],

  // --------------------------------------------------------- getting there
  travel: {
    intro:
      "Raiganj is in north Bengal, and getting here takes a little planning. Here is everything you need.",

    /** The Raiganj pin — opens straight into Google Maps. */
    location: {
      name: "Raiganj, West Bengal",
      coordinates: "25.6167° N, 88.1167° E",
      mapsUrl: "https://www.google.com/maps?q=25.6167,88.1167",
    },

    /**
     * The Reception is in Pondicherry, right across the country from the rest
     * of the functions — flagged separately so nobody books one trip assuming
     * it covers both.
     */
    secondCity: {
      heading: "The Reception is in Pondicherry",
      body: "Everything from the Ashirvaad to the Vidaai is in Raiganj. The Reception on 2 February is in Pondicherry, roughly 2,000 km south, so it is a separate journey and a separate booking. We would love to celebrate with you there too.",
    },

    /** Shown as a highlighted notice at the top of the Getting There page. */
    arriveBy: {
      heading: "Please arrive by the morning of Wednesday, 27 January",
      body: "The celebrations begin that evening with the Ashirvaad, so aim to land at Purnea by Wednesday morning at the latest. Flights into Purnea are limited, so book early, and tell Triparna or Ketan your arrival time so we can arrange a pickup.",
    },

    // TODO: please double-check these distances and journey times before you
    // share the site — they are good-faith estimates, not verified.
    byAir: {
      name: "Purnea Airport, Bihar",
      note: "The closest airport, roughly 2 hours from Raiganj by road. Flights are limited, so book well ahead. Bagdogra (IXB) is the larger alternative at about 3 hours away.",
    },
    byRail: {
      name: "Raiganj Station",
      note: "Raiganj has its own station. For more frequent long-distance trains, Malda Town Junction is about 2 hours away and Kishanganj is a similar distance.",
    },
    byRoad: {
      name: "Driving",
      note: "About 10 to 11 hours from Kolkata via NH12 and NH27. Comfortable as an overnight drive, or break the journey at Malda.",
    },

    stay: {
      heading: "Where to stay",
      body: "Your stay is taken care of. We will be there to welcome you at the hotel once you reach.",
    },

    localTips: [
      "Tell Triparna or Ketan your arrival date and time and we will arrange a pickup from Purnea.",
      "Late January in north Bengal is properly cold in the mornings and evenings — bring layers.",
      "App cabs are unavailable in Raiganj. Local transportation will be arranged for you at all times.",
    ],
  },
} as const;

export type Wedding = typeof wedding;
