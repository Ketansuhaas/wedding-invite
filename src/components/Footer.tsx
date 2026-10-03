import { wedding } from "@/config/wedding";
import { Photo } from "@/components/Photo";

export function Footer() {
  return (
    <footer className="border-t border-line/50 panel-soft">
      <div className="mx-auto max-w-5xl px-6 py-14 text-center">
        <Photo
          photo={wedding.footerPhoto}
          aspect="aspect-[3/4]"
          className="mx-auto mb-8 max-w-[13rem]"
          sizes="(max-width: 640px) 60vw, 208px"
        />

        <p className="font-display italic text-2xl text-ink">
          {wedding.partnerA} <span className="text-gold">&</span>{" "}
          {wedding.partnerB}
        </p>
        <p className="mt-2 text-sm text-muted">
          {wedding.weddingDateLabel} · {wedding.city}
        </p>

        <div className="rule mx-auto my-8 max-w-xs">
          <span aria-hidden="true" className="text-gold">
            ✦
          </span>
        </div>

        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted">
          {wedding.contacts.blurb}
        </p>
        <p className="mt-6 font-display italic text-2xl text-gold">
          See you there!!
        </p>
      </div>
    </footer>
  );
}
