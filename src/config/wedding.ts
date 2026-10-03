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

  // TODO: the date you want replies by.
  rsvpDeadlineLabel: "31 December 2026",

  contactName: "Ketan",
  contactPhone: "+91 96008 29658",
  contactEmail: "ketan@example.com", // TODO

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
  // Pondicherry, five days later.
  //
  // TODO: fill in the venue names and addresses — they all say TODO below.
  // Add or remove entries freely; the Events page, the home page summary and
  // the RSVP checkboxes all read from this one list.
  events: [
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
      description: "The main event. Dinner follows the ceremony.",
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
        "In Pondicherry, five days after the wedding — a separate trip, and a very long photo queue.",
    },
  ] as WeddingEvent[],

  // --------------------------------------------------------- getting there
  travel: {
    intro:
      "Raiganj is in north Bengal, and getting here takes a little planning. Here is everything you need.",

    /**
     * The Reception is in Pondicherry, right across the country from the rest
     * of the functions — flagged separately so nobody books one trip assuming
     * it covers both.
     */
    secondCity: {
      heading: "The Reception is in Pondicherry",
      body: "Everything from the Mehendi to the Vidaai is in Raiganj. The Reception on 2 February is in Pondicherry, roughly 2,000 km south — a separate journey and a separate booking. Most guests come to one or the other, and we would be glad to see you at either.",
    },

    /** Shown as a highlighted notice at the top of the Getting There page. */
    arriveBy: {
      heading: "Please arrive by the morning of Wednesday, 27 January",
      body: "The Mehendi starts that evening, so aim to land at Purnea by Wednesday morning at the latest. Flights into Purnea are limited, so book early — and tell us your arrival time so we can arrange a pickup.",
    },

    // TODO: please double-check these distances and journey times before you
    // share the site — they are good-faith estimates, not verified.
    byAir: {
      name: "Purnea Airport, Bihar",
      note: "The closest airport, roughly 2 to 2.5 hours from Raiganj by road. Flights are limited, so book well ahead. Bagdogra (IXB) is the larger alternative at about 4 hours away.",
    },
    byRail: {
      name: "Raiganj Station",
      note: "Raiganj has its own station. For more frequent long-distance trains, Malda Town Junction is about 2 hours away and Kishanganj is a similar distance.",
    },
    byRoad: {
      name: "Driving",
      note: "About 10 to 11 hours from Kolkata via NH12 and NH27. Comfortable as an overnight drive, or break the journey at Malda.",
    },

    // TODO: add the hotels once you have blocked rooms.
    hotels: [
      {
        name: "TODO: hotel name",
        note: "Add the hotel, the rate, and the date guests need to book by.",
        url: "",
      },
    ],

    localTips: [
      "Tell us your arrival date and time and we will arrange a pickup from Purnea.",
      "Late January in north Bengal is properly cold in the mornings and evenings — bring layers.",
      "App cabs are unreliable in Raiganj. Let us organise local transport for you rather than booking your own.",
    ],
  },

  // ------------------------------------------------------------------ faqs
  faqs: [
    {
      q: "When do I need to arrive?",
      a: "By the morning of Wednesday 27 January at the latest — the Gaye Holud begins that day. Fly into Purnea if you can.",
    },
    {
      q: "Do I have to come to every event?",
      a: "Not at all. Tick whichever functions you can make in the RSVP form. The reception on 2 February is a separate trip, so plenty of people will come to one and not the other.",
    },
    {
      q: "Can I bring a plus one?",
      a: "Please tell us in the RSVP form how many people are coming with you, and we will make room.",
    },
    {
      q: "Are children welcome?",
      a: "Absolutely. Just include them in your party count so we can plan the catering.",
    },
    {
      q: "How do I get from the airport to Raiganj?",
      a: "Tell us your flight details in the RSVP form and we will sort out a pickup. It is about a 2 hour drive.",
    },
    {
      q: "What about gifts?",
      a: "Your presence is genuinely the whole point, especially given how far most of you are travelling.",
    },
  ],
} as const;

export type Wedding = typeof wedding;
