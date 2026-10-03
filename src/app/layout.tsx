import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/noto-sans-oriya/400.css";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "bits&bytes Bhubaneswar — Old roots. New routes.",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "bits&bytes Bhubaneswar — Old roots. New routes.",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
