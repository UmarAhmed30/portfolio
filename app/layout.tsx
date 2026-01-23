import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SideSlider from "@/components/SideSlider";
import StatusBanner from "@/components/StatusBanner";
import { ColorProvider } from "@/contexts/ColorContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Umar Ahmed — SWE",
  description: "Designer focused on creating beautiful, human-centered digital experiences",
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased overflow-x-hidden`} suppressHydrationWarning>
        <ColorProvider>
          <SideSlider />
        <StatusBanner />
          <div className="ml-[26.5rem] mr-4 pt-12">
          {children}
        </div>
        </ColorProvider>
      </body>
    </html>
  );
}
