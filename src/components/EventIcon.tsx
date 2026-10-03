/**
 * A small line-drawn motif for each function, keyed by the event's slug.
 *
 * These are hand-drawn SVG rather than photographs on purpose: line art in
 * gold sits with the engraved-invitation type, where seven stock photos of
 * other people's weddings would fight it.
 *
 * An unrecognised slug falls back to a blossom, so adding a new event to
 * wedding.ts never leaves a hole.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Mehendi — a paisley with a dotted infill. */
function Mehendi() {
  return (
    <>
      <path
        d="M13.4 3.2c4.3 2.3 6.3 5.6 6.3 9.1a7.1 7.1 0 0 1-12.8 4.2c-1.2-1.7-.7-3.9 1.2-4.6 1.7-.6 3.3.6 3.2 2.2"
        {...stroke}
      />
      <circle cx="13" cy="9" r="1.5" {...stroke} />
      <circle cx="11.2" cy="13.4" r="0.7" {...stroke} />
      <circle cx="15.6" cy="13" r="0.7" {...stroke} />
    </>
  );
}

/** Haldi — a bowl of turmeric with two sprigs. */
function Haldi() {
  return (
    <>
      <path d="M3.6 12.4h16.8a8.4 8.4 0 0 1-16.8 0Z" {...stroke} />
      <path d="M3 12.4h18" {...stroke} />
      <path d="M9.6 9.6c-.4-2 .2-3.6 1.6-4.8" {...stroke} />
      <path d="M13.4 9.6c.3-2.4 1.2-4 2.6-5.2" {...stroke} />
    </>
  );
}

/** Engagement — two interlocking rings with a stone. */
function Engagement() {
  return (
    <>
      <circle cx="9.4" cy="14.6" r="4.8" {...stroke} />
      <circle cx="15" cy="14.6" r="4.8" {...stroke} />
      <path d="M15 8.2 13.4 5.6h3.2L15 8.2Z" {...stroke} />
    </>
  );
}

/** Sangeet — a pair of beamed notes. */
function Sangeet() {
  return (
    <>
      <path d="M9.4 17.2V5.4l9.4-1.8v11.8" {...stroke} />
      <path d="M9.4 8.4l9.4-1.8" {...stroke} />
      <ellipse cx="7.4" cy="17.4" rx="2.1" ry="1.8" {...stroke} />
      <ellipse cx="16.8" cy="15.6" rx="2.1" ry="1.8" {...stroke} />
    </>
  );
}

/** Shaadi — the sacred fire. */
function Shaadi() {
  return (
    <>
      <path
        d="M12 3.4c2.2 3 4.2 4.4 4.2 7.2a4.2 4.2 0 0 1-8.4 0c0-1.5.8-2.6 2-3.8"
        {...stroke}
      />
      <path d="M12 8.8c1 1.2 1.6 1.9 1.6 2.9a1.6 1.6 0 0 1-3.2 0c0-.7.5-1.3 1.6-2.9Z" {...stroke} />
      <path d="M5 18.4h14" {...stroke} />
      <path d="M6.8 18.4 8 21h8l1.2-2.6" {...stroke} />
    </>
  );
}

/** Vidaai — a canopied doli. */
function Vidaai() {
  return (
    <>
      <path d="M2.6 10.4h18.8" {...stroke} />
      <path d="M4.8 10.4a7.2 7.2 0 0 1 14.4 0" {...stroke} />
      <path d="M12 3.2v-1" {...stroke} />
      <path d="M6.4 10.4v8.4h11.2v-8.4" {...stroke} />
      <path d="M6.4 18.8h11.2" {...stroke} />
      <path d="M12 10.4v8.4" {...stroke} />
    </>
  );
}

/** Reception — two glasses raised. */
function Reception() {
  return (
    <>
      <path d="M4.8 3.8h5.6l-1.4 6.4a1.5 1.5 0 0 1-2.8 0L4.8 3.8Z" {...stroke} />
      <path d="M7.6 11.6v6.6" {...stroke} />
      <path d="M5.4 18.6h4.4" {...stroke} />
      <path d="M13.6 3.8h5.6l-1.4 6.4a1.5 1.5 0 0 1-2.8 0l-1.4-6.4Z" {...stroke} />
      <path d="M16.4 11.6v6.6" {...stroke} />
      <path d="M14.2 18.6h4.4" {...stroke} />
    </>
  );
}

/** Fallback — a small blossom. */
function Blossom() {
  return (
    <>
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="12"
          cy="7.4"
          rx="2.4"
          ry="4"
          transform={`rotate(${angle} 12 12)`}
          {...stroke}
        />
      ))}
      <circle cx="12" cy="12" r="1.3" {...stroke} />
    </>
  );
}

/** Travel modes, drawn to match the event motifs rather than using emoji. */
function Plane() {
  return (
    <path
      d="M2.6 13.4 21.4 5.6l-4 6.8 1 6.6-2.4-1-1.6-4.4-5 2.6-.4 3-1.8-1-.6-3.2-3-1.6Z"
      {...stroke}
    />
  );
}

function Train() {
  return (
    <>
      <rect x="5.4" y="3.4" width="13.2" height="12.4" rx="3" {...stroke} />
      <path d="M5.4 9.6h13.2" {...stroke} />
      <circle cx="9" cy="12.8" r="1" {...stroke} />
      <circle cx="15" cy="12.8" r="1" {...stroke} />
      <path d="M8.4 15.8 6 20.6M15.6 15.8 18 20.6" {...stroke} />
    </>
  );
}

function Car() {
  return (
    <>
      <path d="M3 15.4v-3l2-4.6a2 2 0 0 1 1.8-1.2h10.4a2 2 0 0 1 1.8 1.2l2 4.6v3" {...stroke} />
      <path d="M3 12.4h18" {...stroke} />
      <circle cx="7.2" cy="16.2" r="1.8" {...stroke} />
      <circle cx="16.8" cy="16.2" r="1.8" {...stroke} />
      <path d="M3 15.4h1.8M19.2 15.4H21" {...stroke} />
    </>
  );
}

const TRAVEL_MOTIFS: Record<string, () => React.ReactElement> = {
  byAir: Plane,
  byRail: Train,
  byRoad: Car,
};

export function TravelIcon({
  mode,
  className = "",
}: {
  mode: string;
  className?: string;
}) {
  const Motif = TRAVEL_MOTIFS[mode] ?? Blossom;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <Motif />
    </svg>
  );
}

const MOTIFS: Record<string, () => React.ReactElement> = {
  mehendi: Mehendi,
  haldi: Haldi,
  engagement: Engagement,
  sangeet: Sangeet,
  shaadi: Shaadi,
  vidaai: Vidaai,
  reception: Reception,
};

export function EventIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const Motif = MOTIFS[slug] ?? Blossom;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <Motif />
    </svg>
  );
}
