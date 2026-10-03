import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { wedding } from "@/config/wedding";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/Photo";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  // The italic cut is what gives the headings their engraved-invitation look.
  style: ["normal", "italic"],
  display: "swap",
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const couple = `${wedding.partnerA} & ${wedding.partnerB}`;

export const metadata: Metadata = {
  title: {
    default: `${couple} — ${wedding.weddingDateLabel}`,
    template: `%s — ${couple}`,
  },
  description: `${wedding.tagline}. Join us in ${wedding.city} on ${wedding.weddingDateLabel}.`,
  openGraph: {
    title: `${couple} — ${wedding.weddingDateLabel}`,
    description: `${wedding.tagline}. Join us in ${wedding.city} on ${wedding.weddingDateLabel}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <PageBackground photo={wedding.pageBackground} blurPx={0} />
        {/* Everything sits above the fixed background photo. */}
        <div className="relative z-10 flex flex-1 flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
