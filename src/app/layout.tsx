import type { Metadata } from "next";
import Providers from "@/app/providers";

import { Container } from "@chakra-ui/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: {
    template: "%s | Acme",
    default: "Acme",
  },
  description: "Generated by create next app",
  openGraph: {
    title: "Acme",
    description: "Generated by create next app",
    url: "/",
    siteName: "Acme",
    images: [
      {
        url: "/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // `suppressHydrationWarning` is used to suppress the warning about adding additional attributes (from libs like Chakra UI) to the `html` and `body` tags after page hydration
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navigation />
          <Container maxW="container.lg">{children}</Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
