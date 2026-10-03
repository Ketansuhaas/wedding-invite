export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto mt-10 mb-12 max-w-2xl rounded-2xl border border-line/60 panel px-6 py-12 text-center md:mt-16">
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] text-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 font-display italic text-4xl font-medium text-gold md:text-5xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted">{intro}</p>
      )}
      <div className="rule mx-auto mt-10 max-w-[10rem]">
        <span aria-hidden="true" className="text-gold">
          ✦
        </span>
      </div>
    </div>
  );
}
