# Ketan & Triparna — Wedding Site

A five-page wedding invitation, built as a static site and hosted free on GitHub
Pages. RSVPs are collected through a Google Form, so replies land in a Google
Sheet you already know how to read.

| Page          | Path      | What's on it                               |
| ------------- | --------- | ------------------------------------------ |
| Invitation    | `/`       | Names, date, countdown, event summary      |
| Our Story     | `/story`  | Timeline of how you got here               |
| Events        | `/events` | Each function with time, venue, dress code |
| Getting There | `/travel` | Air/rail/road, venue directions, hotels    |
| RSVP          | `/rsvp`   | The form, plus FAQs                        |

---

## 1. Put your details in

Everything you need to change lives in **two files**. You do not need to touch
anything else.

### `src/config/wedding.ts`

Names, dates, venues, the story timeline, travel info and FAQs. Anything still
carrying a `TODO` comment is a placeholder waiting for your real details.

Add or remove entries in the `events` array freely — the Events page, the home
page summary and the RSVP checkboxes all read from that one list.

### `src/config/rsvp-form.ts`

Connects the site to your Google Form. Step-by-step instructions are in the
comment at the top of that file; the short version is below.

---

## 2. Wire up the Google Form

Guests never see the Google Form. They fill in the styled form on your site, and
their answers are posted straight into your form's response Sheet.

1. **Create a Google Form** with one question per field, in this order:

   | Question               | Type            | Notes                                                           |
   | ---------------------- | --------------- | --------------------------------------------------------------- |
   | Your name              | Short answer    | Mark as required                                                  |
   | Phone number           | Short answer    |                                                                   |
   | Will you be joining us | Multiple choice | Options **exactly**: `Joyfully accepts` / `Regretfully declines`   |
   | Which events           | Checkboxes      | One option per event, text **exactly** matching `wedding.ts`      |
   | How many in total      | Short answer    |                                                                   |
   | Who is coming with you | Paragraph       |                                                                   |
   | Dietary requirements   | Paragraph       |                                                                   |
   | Song request           | Short answer    |                                                                   |
   | Message                | Paragraph       |                                                                   |

   The option text has to match character for character, or Google silently
   drops the answer.

2. In the form, click **⋮ → Get pre-filled link**.

3. Type a junk answer into every question, then **Get link → Copy link**.

4. Paste it somewhere readable. It looks like:

   ```
   https://docs.google.com/forms/d/e/1FAIpQLSd...X9/viewform?entry.1234567=junk&entry.7654321=junk
   ```

5. The code between `/e/` and `/viewform` is your **formId**. The
   `entry.NNNNNNN` numbers map, in question order, to the answers you typed.

6. Fill both into `src/config/rsvp-form.ts`.

7. Run `npm run dev`, submit a test RSVP, and confirm the row appears in the
   form's **Responses** tab. Delete the test row afterwards.

Until this is done the RSVP page shows a "not connected yet" notice instead of
the form, so it is safe to deploy before you finish this step — but connect it
before you share the link.

**Prefer to skip the custom form?** Paste your form's public URL into
`directFormUrl` and the page shows a button through to Google's own form
instead.

### Watching the replies

Open your form → **Responses** → the green Sheets icon. That gives you a live
spreadsheet: sort it, total the party sizes, filter the dietary column for the
caterer. Turn on **Responses → ⋮ → Get email notifications for new responses**
if you want a ping each time someone replies.

---

## 3. Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Edits appear straight away.

---

## 4. Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes on every
push to `main`. It works out the base path from your repo name, so no config is
needed either way.

1. Create a repo on GitHub and push:

   ```bash
   git add -A
   git commit -m "Wedding site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment → Source →
   GitHub Actions**.

3. Push again (or **Actions → Deploy to GitHub Pages → Run workflow**). After a
   couple of minutes the site is at:

   - `https://<your-username>.github.io/<repo>/` for a normal repo, or
   - `https://<your-username>.github.io/` if you name the repo
     `<your-username>.github.io`.

That URL is what you drop into the WhatsApp group.

### Using your own domain

Buy a domain, add a `CNAME` file in `public/` containing just the domain, point
your DNS at GitHub, then set it under **Settings → Pages → Custom domain**. With
a custom domain the base path must be empty — set `NEXT_PUBLIC_BASE_PATH` to an
empty string in the workflow.

---

## Notes

- The site is fully static: no server, no database, no running costs.
- Because Google's endpoint does not return CORS headers, the browser cannot
  read a success code back. The form treats a sent request as success — worth
  running one test submission after any change to the form questions.
- Reordering or retyping questions in the Google Form changes the `entry` ids.
  If replies stop arriving, redo the pre-filled link step.
