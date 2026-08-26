import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yellowagency.example"),
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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
