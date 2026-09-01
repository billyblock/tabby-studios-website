import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, BUSINESS } from "./lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tabby Studios | Web Design in Marquette, Michigan",
  description:
    "Tabby Studios builds mobile-friendly, SEO-ready websites for small businesses in Marquette, Michigan and across the Upper Peninsula. Scoped pricing, no jargon.",
  keywords: [
    "Tabby Studios",
    "web design Marquette MI",
    "website designer Marquette Michigan",
    "Upper Peninsula web design",
    "small business website design",
    "SEO friendly websites",
  ],
  openGraph: {
    title: "Tabby Studios | Web Design in Marquette, Michigan",
    description:
      "Mobile-friendly, SEO-ready websites for local businesses. Clean design, honest scoped pricing.",
    url: SITE_URL,
    siteName: "Tabby Studios",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  url: SITE_URL,
  email: BUSINESS.email,
  areaServed: BUSINESS.areaServed,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marquette",
    addressRegion: "MI",
    addressCountry: "US",
  },
  priceRange: "$349-$2500+",
  founder: {
    "@type": "Person",
    name: "William Block",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
