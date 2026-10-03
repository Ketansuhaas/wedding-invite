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

  return (
    <>
      <PageHeader
        eyebrow="Finding us"
        title="Getting There"
        intro={travel.intro}
      />

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="rounded-lg border border-line panel px-8 py-6 text-center">
          <p className="leading-relaxed text-ink">{wedding.welcome.provided}</p>
        </div>
      </section>

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
        <div className="rounded-2xl border border-line panel px-6 py-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="font-display italic text-xl text-gold">
              Find us on the map
            </h2>
            <p className="mt-2 text-ink">{travel.location.name}</p>
            <p className="mt-1 text-sm text-muted">
              {travel.location.coordinates}
            </p>
          </div>
          <a
            href={travel.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block shrink-0 rounded-full border border-gold px-6 py-2.5 text-xs tracking-[0.15em] text-gold uppercase transition-colors hover:bg-gold/85 hover:text-ivory sm:mt-0"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="overflow-hidden rounded-2xl border border-line panel">
          <div className="px-6 py-5">
            <h2 className="font-display italic text-xl text-gold">
              {travel.stay.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {travel.stay.body}
            </p>
          </div>
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
      </section>
    </>
  );
}
