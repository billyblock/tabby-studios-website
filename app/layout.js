import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    images: [
      {
        url: "/tabbystudios-fullbackground.png",
        width: 1672,
        height: 941,
        alt: "Tabby Studios",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
