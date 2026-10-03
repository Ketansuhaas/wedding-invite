"use client";

import { useState } from "react";
import { wedding } from "@/config/wedding";
import {
  googleFormActionUrl,
  isRsvpConfigured,
  rsvpForm,
} from "@/config/rsvp-form";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-md border border-line bg-ivory/65 backdrop-blur-sm px-4 py-3 text-ink placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none";
const labelClass = "block text-xs tracking-[0.2em] text-gold uppercase";

export function RsvpForm() {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();
    const f = rsvpForm.fields;

    const add = (entryId: string, value: FormDataEntryValue | null) => {
      if (entryId && typeof value === "string" && value.trim()) {
        params.append(`entry.${entryId}`, value.trim());
      }
    };

    add(f.name, data.get("name"));
    add(f.phone, data.get("phone"));
    add(
      f.attending,
      attending === "yes"
        ? rsvpForm.answers.attendingYes
        : rsvpForm.answers.attendingNo,
    );

    if (attending === "yes") {
      // Google Forms takes checkbox answers as the same key repeated.
      if (f.events) {
        for (const value of data.getAll("events")) {
          add(f.events, value);
        }
      }
      add(f.partySize, data.get("partySize"));
      add(f.guestNames, data.get("guestNames"));
      add(f.dietary, data.get("dietary"));
      add(f.song, data.get("song"));
    }
    add(f.message, data.get("message"));

    setStatus("sending");
    try {
      // Google does not send CORS headers on formResponse, so the reply is
      // opaque — we cannot read a status code. A resolved promise means the
      // request left the browser, which in practice means it was recorded.
      await fetch(googleFormActionUrl, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  // -------------------------------------------------- not yet wired up
  if (!isRsvpConfigured) {
    if (rsvpForm.directFormUrl) {
      return (
        <div className="rounded-lg border border-line panel p-10 text-center">
          <p className="font-display italic text-2xl text-gold">
            Let us know if you can make it
          </p>
          <a
            href={rsvpForm.directFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gold/85 backdrop-blur-sm px-10 py-3.5 text-sm tracking-[0.15em] text-ivory uppercase transition-colors hover:bg-ink/85"
          >
            Open the RSVP form
          </a>
        </div>
      );
    }

    return (
      <div className="rounded-lg border border-dashed border-gold/50 panel p-8 text-center">
        <p className="font-display italic text-2xl text-gold">RSVP opening soon</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          The form is not connected yet. Follow the steps in{" "}
          <code className="rounded bg-ivory/70 px-1.5 py-0.5 text-xs text-ink">
            src/config/rsvp-form.ts
          </code>{" "}
          to link your Google Form, and this notice will be replaced by the real
          form.
        </p>
        <p className="mt-4 text-xs text-muted">
          Only you can see this message — guests see it too, so connect the form
          before you share the link.
        </p>
      </div>
    );
  }

  // ---------------------------------------------------------- thank you
  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-lg border border-line panel p-12 text-center"
      >
        <p aria-hidden="true" className="text-3xl text-gold">
          ✦
        </p>
        <h2 className="mt-4 font-display italic text-3xl text-gold">Thank you</h2>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-muted">
          {attending === "yes"
            ? "We have got your reply and we cannot wait to celebrate with you."
            : "Thank you for letting us know. You will be missed, and we hope to see you soon after."}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setAttending(null);
          }}
          className="mt-8 text-sm text-gold underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          Send another reply
        </button>
      </div>
    );
  }

  // --------------------------------------------------------------- form
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="First and last name"
          className={`${fieldClass} mt-3`}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="So we can reach you on the day"
          className={`${fieldClass} mt-3`}
        />
      </div>

      <fieldset>
        <legend className={labelClass}>Will you be joining us?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            { value: "yes", label: "Joyfully accepts" },
            { value: "no", label: "Regretfully declines" },
          ].map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer rounded-md border px-5 py-4 text-center transition-colors ${
                attending === option.value
                  ? "border-gold bg-gold/85 backdrop-blur-sm text-ivory"
                  : "border-line bg-ivory/65 backdrop-blur-sm text-ink hover:border-gold"
              }`}
            >
              <input
                type="radio"
                name="attending"
                value={option.value}
                required
                checked={attending === option.value}
                onChange={() => setAttending(option.value as "yes" | "no")}
                className="sr-only"
              />
              <span className="font-display italic text-xl">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {attending === "yes" && (
        <div className="space-y-8 border-t border-line pt-8">
          <fieldset>
            <legend className={labelClass}>Which events can you come to?</legend>
            <div className="mt-3 space-y-2">
              {wedding.events.map((event) => (
                <label
                  key={event.slug}
                  className="flex cursor-pointer items-start gap-3 rounded-md border border-line bg-ivory/65 backdrop-blur-sm px-4 py-3 transition-colors hover:border-gold"
                >
                  <input
                    type="checkbox"
                    name="events"
                    value={event.name}
                    defaultChecked
                    className="mt-1 h-4 w-4 accent-[#a8873f]"
                  />
                  <span>
                    <span className="block text-ink">{event.name}</span>
                    <span className="block text-sm text-muted">
                      {event.dateLabel} · {event.timeLabel}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="partySize" className={labelClass}>
              How many of you are coming in total?
            </label>
            <input
              id="partySize"
              name="partySize"
              type="number"
              min={1}
              max={20}
              defaultValue={1}
              className={`${fieldClass} mt-3 sm:max-w-[10rem]`}
            />
            <p className="mt-2 text-sm text-muted">Including yourself.</p>
          </div>

          <div>
            <label htmlFor="guestNames" className={labelClass}>
              Who is coming with you?
            </label>
            <textarea
              id="guestNames"
              name="guestNames"
              rows={2}
              placeholder="Names of anyone joining you"
              className={`${fieldClass} mt-3 resize-y`}
            />
          </div>

          <div>
            <label htmlFor="dietary" className={labelClass}>
              Anything we should know about food?
            </label>
            <textarea
              id="dietary"
              name="dietary"
              rows={2}
              placeholder="Allergies, Jain, vegan, anything at all"
              className={`${fieldClass} mt-3 resize-y`}
            />
          </div>

          <div>
            <label htmlFor="song" className={labelClass}>
              A song you want to hear
            </label>
            <input
              id="song"
              name="song"
              placeholder="We are building the playlist from these"
              className={`${fieldClass} mt-3`}
            />
          </div>
        </div>
      )}

      {attending !== null && (
        <div>
          <label htmlFor="message" className={labelClass}>
            A message for us
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Optional, but we do read every one"
            className={`${fieldClass} mt-3 resize-y`}
          />
        </div>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong sending your reply. Please try again, or message{" "}
          {wedding.contactName} on {wedding.contactPhone}.
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-gold/85 backdrop-blur-sm px-12 py-3.5 text-sm tracking-[0.15em] text-ivory uppercase transition-colors hover:bg-ink disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send RSVP"}
        </button>
      </div>
    </form>
  );
}
