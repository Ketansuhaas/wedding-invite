import type { Metadata } from "next";
import { wedding } from "@/config/wedding";
import { PageHeader } from "@/components/PageHeader";
import { TravelIcon } from "@/components/EventIcon";

export const metadata: Metadata = { title: "Getting There" };

const routes = [
  { key: "byAir", label: "By air" },
  { key: "byRail", label: "By train" },
  { key: "byRoad", label: "By road" },
] as const;

export default function TravelPage() {
  const { travel } = wedding;

  // One directions card per distinct place. Keyed on venue *and* address so
  // Raiganj and Pondicherry stay separate while their venue names are both
  // still placeholders.
  const venues = Array.from(
    new Map(
      wedding.events.map((e) => [`${e.venue}|${e.address}`, e]),
    ).values(),
  );

  return (
    <>
      <PageHeader
        eyebrow="Finding us"
        title="Getting There"
        intro={travel.intro}
      />

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="rounded-lg border-2 border-gold panel px-8 py-7 text-center">
          <p className="text-xs tracking-[0.25em] text-gold uppercase">
            Before you book
          </p>
          <h2 className="mt-3 font-display italic text-2xl leading-snug text-ink md:text-3xl">
            {travel.arriveBy.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {travel.arriveBy.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="rounded-lg border border-line panel px-8 py-6">
          <h2 className="font-display italic text-xl text-gold">
            {travel.secondCity.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {travel.secondCity.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="overflow-hidden rounded-2xl border border-line panel">
          <h2 className="border-b border-line px-6 py-4 font-display italic text-xl text-gold">
            Getting to Raiganj
          </h2>
          <ul className="grid sm:grid-cols-3">
            {routes.map((route) => (
              <li
                key={route.key}
                className="border-b border-line p-6 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <TravelIcon mode={route.key} className="h-8 w-8 text-gold" />
                <p className="mt-3 text-xs tracking-[0.2em] text-gold uppercase">
                  {route.label}
                </p>
                <p className="mt-2 text-ink">{travel[route.key].name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {travel[route.key].note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="overflow-hidden rounded-2xl border border-line panel">
          <h2 className="border-b border-line px-6 py-4 font-display italic text-xl text-gold">
            The venues
          </h2>
          <ul>
            {venues.map((venue) => (
              <li
                key={`${venue.venue}|${venue.address}`}
                className="border-b border-line px-6 py-5 last:border-b-0 sm:flex sm:items-center sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-display italic text-xl text-ink">
                    {venue.venue}
                  </p>
                  <p className="mt-1 text-sm text-muted">{venue.address}</p>
                  <p className="mt-2 text-xs tracking-[0.15em] text-gold uppercase">
                    {wedding.events
                      .filter((e) => e.address === venue.address)
                      .map((e) => e.name)
                      .join(" · ")}
                  </p>
                </div>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block shrink-0 rounded-full border border-gold px-6 py-2.5 text-xs tracking-[0.15em] text-gold uppercase transition-colors hover:bg-gold/85 hover:text-ivory sm:mt-0"
                >
                  Directions
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="overflow-hidden rounded-2xl border border-line panel">
          <div className="border-b border-line px-6 py-4">
            <h2 className="font-display italic text-xl text-gold">
              Where to stay
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              We have held rooms at the hotels below. Mention the wedding when
              you book.
            </p>
          </div>
          <ul>
            {travel.hotels.map((hotel) => (
              <li
                key={hotel.name}
                className="border-b border-line px-6 py-5 last:border-b-0"
              >
                <p className="font-display italic text-xl text-ink">
                  {hotel.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {hotel.note}
                </p>
                {hotel.url && (
                  <a
                    href={hotel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-gold underline decoration-line underline-offset-4 transition-colors hover:text-ink"
                  >
                    Book a room →
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        <div className="rounded-lg border border-line panel p-6">
          <h2 className="font-display italic text-2xl text-gold">
            Good to know
          </h2>
          <ul className="mt-6 space-y-3">
            {travel.localTips.map((tip) => (
              <li key={tip} className="flex gap-3 text-muted">
                <span aria-hidden="true" className="text-gold">
                  ✦
                </span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 rounded-lg border border-line panel px-6 py-5 text-sm leading-relaxed text-muted">
          Stuck somewhere, or landing at an odd hour? Call {wedding.contactName}{" "}
          on{" "}
          <a
            href={`tel:${wedding.contactPhone.replace(/\s/g, "")}`}
            className="text-gold underline decoration-line underline-offset-4"
          >
            {wedding.contactPhone}
          </a>{" "}
          and we will sort something out.
        </p>
      </section>
    </>
  );
}
