import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingCTA } from "@/components/floating-cta";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: `${site.brand} - ${site.tagline}`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.brand }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.brand,
    title: `${site.brand} - ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <FloatingCTA />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
