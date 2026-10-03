import type { Metadata } from "next";
import { wedding, type WeddingEvent } from "@/config/wedding";
import { PageHeader } from "@/components/PageHeader";
import { EventIcon } from "@/components/EventIcon";
import { photoExists } from "@/components/Photo";
import Image from "next/image";

/**
 * Photos are picked up by filename: drop public/photos/events/<slug>.jpg and it
 * appears on that function's card, replacing the drawn motif. Nothing needs
 * configuring — no file simply means the motif stays.
 */
const eventPhotoSrc = (slug: string) => `/photos/events/${slug}.jpg`;

function hasEventPhoto(slug: string) {
  return photoExists(eventPhotoSrc(slug));
}

function EventPhoto({ slug, name }: { slug: string; name: string }) {
  if (!hasEventPhoto(slug)) return null;
  return (
    <div className="relative aspect-[16/9] w-full border-b border-line">
      <Image
        src={eventPhotoSrc(slug)}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 700px"
        className="object-cover"
      />
    </div>
  );
}

export const metadata: Metadata = { title: "Events" };

/**
 * Several functions share a date — three fall on the 28th — so the schedule
 * reads as one block per day rather than a flat list of cards.
 * Consecutive events with the same dateLabel are grouped together.
 */
function groupByDay(events: readonly WeddingEvent[]) {
  const days: { date: string; events: WeddingEvent[] }[] = [];
  for (const event of events) {
    const current = days.at(-1);
    if (current && current.date === event.dateLabel) {
      current.events.push(event);
    } else {
      days.push({ date: event.dateLabel, events: [event] });
    }
  }
  return days;
}

export default function EventsPage() {
  const days = groupByDay(wedding.events);

  return (
    <>
      <PageHeader
        eyebrow={`${wedding.events.length} functions`}
        title="Events"
        intro={`Everything up to the Vidaai is in ${wedding.city}. We would love to have you there for all of them.`}
      />

      <section className="mx-auto max-w-3xl px-6 pb-24">
        {/* Each day is a single card: the date heading and the functions that
            fall on it belong together, so they share one panel with hairlines
            between rather than floating as separate boxes. */}
        <div className="space-y-6">
          {days.map((day) => (
            <div
              key={day.date}
              className="overflow-hidden rounded-2xl border border-line panel"
            >
              <h2 className="border-b border-line px-6 py-4 font-display italic text-xl text-gold">
                {day.date}
              </h2>

              <ol>
                {day.events.map((event) => (
                  <li
                    key={event.slug}
                    id={event.slug}
                    className="scroll-mt-24 border-b border-line last:border-b-0"
                  >
                    <EventPhoto slug={event.slug} name={event.name} />

                    <div className="flex items-start gap-4 px-6 py-5">
                      {!hasEventPhoto(event.slug) && (
                        <EventIcon
                          slug={event.slug}
                          className="mt-1 h-8 w-8 shrink-0 text-gold"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-display italic text-xl text-ink">
                            {event.name}
                          </h3>
                          <p className="shrink-0 text-sm text-gold">
                            {event.timeLabel}
                          </p>
                        </div>
                        {event.description && (
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
