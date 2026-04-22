import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});



export const metadata: Metadata = {
  title: "SAFIZ | Unlimited Printing & Advertising Solutions — Pakistan & UAE",
  description:
    "SAFIZ is Pakistan's leading printing, signage and advertising company with offices in Karachi and Ajman UAE. Serving 100+ brands since 2005.",
  keywords: [
    "printing services Pakistan",
    "signage Karachi",
    "advertising UAE",
    "large format printing",
    "brand collateral",
    "promotional items",
    "SAFIZ",
  ],
  openGraph: {
    title: "SAFIZ | Unlimited Printing & Advertising Solutions",
    description:
      "Pakistan's leading printing, signage and advertising company with offices in Karachi and Ajman UAE.",
    type: "website",
    locale: "en_US",
    siteName: "SAFIZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAFIZ | Unlimited Printing & Advertising Solutions",
    description:
      "Pakistan's leading printing, signage and advertising company with offices in Karachi and Ajman UAE.",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${plusJakartaDisplay.variable} ${plusJakartaBody.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className="noise-overlay font-body antialiased">
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('safiz-theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            })();
          `}
        </Script>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
