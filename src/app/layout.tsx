import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AOSProvider from "@/context/AosProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { inter, sora } from "./fonts/fontsConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer | Portfolio",
  description: "Developer portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${sora.variable}
        antialiased p-[2.6rem] dark:text-neutral-50 text-neutral-900
        bg-neutral-50 min-h-[full]: dark:bg-neutral-900  md:py-[7.4rem]  md:px-[3.8rem] lg:px-[12.8rem]  `}
        >
          <AOSProvider />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
