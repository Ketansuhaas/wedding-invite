import Link from "next/link";
import { wedding } from "@/config/wedding";
export default function Home() {
  // Several functions share a date, so count distinct days rather than events.
  const dayCount = new Set(wedding.events.map((e) => e.dateLabel)).size;

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-5">
          {/* The invitation itself. */}
          <div className="rounded-2xl border border-line/60 panel px-6 py-16 text-center md:px-12">
            <p className="text-xs tracking-[0.35em] text-muted uppercase">
              {wedding.heroEyebrow}
            </p>

            <h1 className="mt-8 font-display italic text-5xl leading-[1.05] font-medium text-gold sm:text-6xl md:text-7xl">
              {wedding.partnerA}
              <span className="mx-3 text-goldlight md:mx-5">&</span>
              {wedding.partnerB}
            </h1>

            <div className="rule mx-auto mt-10 max-w-xs">
              <span aria-hidden="true" className="text-gold">
                ✦
              </span>
            </div>

            <p className="mt-8 font-display italic text-2xl text-ink md:text-3xl">
              {wedding.tagline}
            </p>
            <p className="mt-4 text-sm tracking-[0.2em] text-muted uppercase">
              {wedding.weddingDateLabel} · {wedding.city}
            </p>
          </div>

          {/* Welcome: the invitation to every function, and what is provided. */}
          <div className="rounded-2xl border border-line/60 panel px-6 py-10 text-center md:px-12">
            <h2 className="font-display italic text-2xl text-ink md:text-3xl">
              {wedding.welcome.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              {wedding.welcome.body}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {wedding.welcome.provided}
            </p>
            <Link
              href="/events"
              className="mt-8 inline-block rounded-full border border-gold panel px-10 py-3.5 text-sm tracking-[0.15em] text-gold uppercase transition-colors hover:bg-gold/85 hover:text-ivory"
            >
              See the events
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- what's happening */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        {/* Heading, schedule and link are one card — the heading describes the
            list directly beneath it, so they should not read as separate
            floating boxes. Cells are separated with borders rather than a
            visible gap, since a nested panel would double the backdrop blur. */}
        <div className="overflow-hidden rounded-2xl border border-line panel">
          <div className="border-b border-line px-8 py-8 text-center">
            <h2 className="font-display italic text-3xl font-medium text-gold">
              The celebrations
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              {wedding.events.length} functions over {dayCount} days, and we
              would love you there for each one of them.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2">
            {wedding.events.map((event) => (
              <li
                key={event.slug}
                className="border-b border-line px-8 py-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r"
              >
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  {event.dateLabel}
                </p>
                <h3 className="mt-2 font-display italic text-2xl text-ink">
                  {event.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{event.timeLabel}</p>
              </li>
            ))}
          </ul>

          <div className="border-t border-line px-8 py-8 text-center">
            {/* inline-block matters: a bare <a> is inline, so the pill padding
                collapses and it stops reading as a button. */}
            <Link
              href="/events"
              className="inline-block rounded-full border border-gold px-10 py-3.5 text-sm tracking-[0.15em] text-gold uppercase transition-colors hover:bg-gold/85 hover:text-ivory"
            >
              The full schedule
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- signpost */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid overflow-hidden rounded-2xl border border-line panel sm:grid-cols-2">
          {[
            {
              href: "/events",
              title: "Events",
              body: "Times for all the functions.",
            },
            {
              href: "/travel",
              title: "Getting There",
              body: "Flights, trains, stay and directions.",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group border-b border-line p-8 text-center transition-colors last:border-b-0 hover:bg-cream/50 sm:border-r sm:border-b-0 sm:last:border-r-0"
            >
              <h3 className="font-display italic text-2xl text-gold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.body}
              </p>
              <span className="mt-4 inline-block text-xs tracking-[0.2em] text-ink uppercase transition-colors group-hover:text-gold">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
