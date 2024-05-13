import type { Metadata } from "next";

const websiteUrl =
  process.env.NODE_ENV === "production"
    ? "https://acme.com"
    : "http://localhost:3000";

export const globalMetadata: Metadata = {
  metadataBase: new URL(websiteUrl),
  title: {
    template: "%s | Acme",
    default: "Acme",
  },
  description: "Generated by create next app",
  openGraph: {
    title: "Acme",
    description: "Generated by create next app",
    url: websiteUrl,
    siteName: "Acme",
    images: [
      {
        url: `${websiteUrl}/og.png`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
