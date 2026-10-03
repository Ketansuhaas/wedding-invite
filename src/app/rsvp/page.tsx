import type { Metadata } from "next";
import { wedding } from "@/config/wedding";
import { PageHeader } from "@/components/PageHeader";
import { RsvpForm } from "@/components/RsvpForm";

export const metadata: Metadata = { title: "RSVP" };

export default function RsvpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Will you join us?"
        title="RSVP"
        intro="One form, one minute. Tick the functions you can make and tell us who is coming with you."
      />

      <section className="mx-auto max-w-xl px-6 pb-20">
        <RsvpForm />
      </section>

      <section className="border-t border-line/50 panel-soft">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <h2 className="text-center font-display italic text-3xl font-medium text-gold">
            Questions
          </h2>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {wedding.faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-display italic text-xl text-ink">{faq.q}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{faq.a}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-center text-sm text-muted">
            Anything else, just ask {wedding.contactName} on{" "}
            <a
              href={`tel:${wedding.contactPhone.replace(/\s/g, "")}`}
              className="text-gold underline decoration-line underline-offset-4"
            >
              {wedding.contactPhone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
