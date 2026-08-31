import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yellow Agency — Creative Growth, Made Clear",
    template: "%s | Yellow Agency",
  },
  description:
    "Yellow Agency is a full-service creative growth partner for ambitious teams that want clearer strategy, stronger creative, and measurable results.",
  openGraph: {
    title: "Yellow Agency — Creative Growth, Made Clear",
    description: "Strategy, creative, performance, and technology in one connected agency team.",
    type: "website",
    url: siteUrl,
    siteName: "Yellow Agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
