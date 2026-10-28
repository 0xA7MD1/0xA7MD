import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";
import "./globals.css";

const plex = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-plex",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "أحمد الشامي | تطوير البرمجيات",
    template: "%s | أحمد الشامي",
  },
  description: profile.description,
  openGraph: {
    title: "أحمد الشامي | تطوير البرمجيات",
    description: profile.description,
    url: profile.siteUrl,
    siteName: "أحمد — 0xA7MD",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "أحمد الشامي | تطوير البرمجيات",
    description: profile.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${plex.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      {/* Browser extensions can inject body attributes before React hydrates. */}
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            انتقل للمحتوى
          </a>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
