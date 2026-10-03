/**
 * Connects the RSVP page to your Google Form.
 *
 * Guests never see the Google Form — they fill in the styled form on the site,
 * and their answers are posted straight into your form's response Sheet.
 *
 * ── How to fill this in (about 10 minutes, no code) ───────────────────────
 *
 * 1. Create a Google Form with one question per field listed in `fields` below.
 *    The question types must be:
 *      name          → Short answer          (required)
 *      phone         → Short answer
 *      attending     → Multiple choice       — options EXACTLY: Joyfully accepts / Regretfully declines
 *      events        → Checkboxes            — one option per event, text EXACTLY matching
 *                                              the event names in wedding.ts
 *      partySize     → Short answer
 *      guestNames    → Paragraph
 *      dietary       → Paragraph
 *      song          → Short answer
 *      message       → Paragraph
 *
 * 2. Click the three dots (⋮) → "Get pre-filled link".
 *
 * 3. Type a junk answer into every question, then click "Get link" → "Copy link".
 *
 * 4. Paste that link somewhere you can read it. It looks like:
 *      https://docs.google.com/forms/d/e/1FAIpQLSd.....X9/viewform?entry.1234567=junk&entry.7654321=junk
 *
 * 5. The long code between /e/ and /viewform is your formId — paste it below.
 *
 * 6. Each entry.NNNNNNN corresponds, in question order, to the answers you typed.
 *    Copy each number into the matching field below.
 *
 * 7. Run `npm run dev`, submit a test RSVP, and confirm the row lands in your
 *    form's Responses tab. Delete the test row afterwards.
 *
 * Until this is configured, the RSVP page shows a friendly notice instead of
 * the form, so you can safely deploy before finishing this step.
 */

export const rsvpForm = {
  /** The long id between /forms/d/e/ and /viewform. */
  formId: "",

  /** Just the numbers — "entry.1234567" should be entered as "1234567". */
  fields: {
    name: "",
    phone: "",
    attending: "",
    events: "",
    partySize: "",
    guestNames: "",
    dietary: "",
    song: "",
    message: "",
  },

  /**
   * These strings are submitted verbatim to Google, so they must match your
   * multiple-choice option text character for character.
   */
  answers: {
    attendingYes: "Joyfully accepts",
    attendingNo: "Regretfully declines",
  },

  /**
   * Optional escape hatch. If you would rather just link guests straight to the
   * raw Google Form, paste its public URL here and the site will show a button
   * to it instead of the custom form.
   */
  directFormUrl: "",
} as const;

/** True once `formId` and at least the required fields are filled in. */
export const isRsvpConfigured = Boolean(
  rsvpForm.formId && rsvpForm.fields.name && rsvpForm.fields.attending,
);

export const googleFormActionUrl = rsvpForm.formId
  ? `https://docs.google.com/forms/d/e/${rsvpForm.formId}/formResponse`
  : "";
