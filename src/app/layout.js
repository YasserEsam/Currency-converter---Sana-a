import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Currency Converter | Yemen Exchange Rates",
  description:
    "A modern and responsive currency converter app for converting between Yemeni Rial, US Dollar, and Saudi Riyal with fixed exchange rates.",
  keywords: [
    "currency converter",
    "Yemen exchange rates",
    "YER to USD",
    "USD to SAR",
    "Yemeni Rial to Dollar",
    "SAR to YER",
    "Yemen money exchange",
    "Next.js currency app"
  ],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  generator: "Next.js 14",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Currency Converter | Yemen Exchange",
    description:
      "Convert currencies easily between Yemeni Rial, US Dollar, and Saudi Riyal. Built with Next.js and Tailwind CSS.",
    url: "https://yourdomain.com",
    siteName: "Yemen Currency Converter",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
