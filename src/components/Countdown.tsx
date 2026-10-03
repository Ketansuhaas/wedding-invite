"use client";

import { useSyncExternalStore } from "react";

/** Re-render once a second. */
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/** Whole seconds, so the snapshot only changes once per tick. */
const getSnapshot = () => Math.floor(Date.now() / 1000);

/**
 * There is no "now" during static export, so the server snapshot is null and
 * the component renders a spacer. React swaps in the real value right after
 * hydration, which keeps the server and client HTML identical.
 */
const getServerSnapshot = () => null;

export function Countdown({
  date,
  /** Single-line variant sized for the header bar. */
  compact = false,
}: {
  date: string;
  compact?: boolean;
}) {
  const nowSeconds = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (nowSeconds === null) {
    // Reserve the same height so the page does not jump on hydration.
    return (
      <div aria-hidden="true" className={compact ? "h-5 w-32" : "h-[88px]"} />
    );
  }

  const ms = new Date(date).getTime() - nowSeconds * 1000;

  if (ms <= 0) {
    return (
      <p
        className={
          compact
            ? "text-xs tracking-[0.15em] text-gold uppercase"
            : "font-display italic text-2xl text-gold"
        }
      >
        Today is the day
      </p>
    );
  }

  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor(ms / 3_600_000) % 24;
  const minutes = Math.floor(ms / 60_000) % 60;
  const seconds = Math.floor(ms / 1000) % 60;

  if (compact) {
    // Seconds are left out on purpose — a digit flickering in a fixed header
    // pulls the eye away from the page the whole time you are reading it.
    return (
      <p className="text-xs tracking-[0.12em] text-muted uppercase">
        <span className="font-display text-lg font-medium text-gold tabular-nums">
          {days}
        </span>
        <span className="mx-1">d</span>
        <span className="font-display text-lg font-medium text-gold tabular-nums">
          {String(hours).padStart(2, "0")}
        </span>
        <span className="mx-1">h</span>
        <span className="font-display text-lg font-medium text-gold tabular-nums">
          {String(minutes).padStart(2, "0")}
        </span>
        <span className="ml-1">m</span>
      </p>
    );
  }

  const units = [
    { value: days, label: days === 1 ? "day" : "days" },
    { value: hours, label: hours === 1 ? "hour" : "hours" },
    { value: minutes, label: minutes === 1 ? "minute" : "minutes" },
    { value: seconds, label: seconds === 1 ? "second" : "seconds" },
  ];

  return (
    <div className="flex items-start justify-center gap-6 md:gap-10">
      {units.map((unit) => (
        <div key={unit.label} className="w-16 text-center md:w-20">
          {/* Digits stay upright — italic numerals are hard to read at a glance. */}
          <div className="font-display text-4xl font-medium text-gold tabular-nums md:text-5xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.65rem] tracking-[0.2em] text-muted uppercase">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
