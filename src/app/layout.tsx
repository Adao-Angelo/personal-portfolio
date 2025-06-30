import type { Metadata } from "next";
import { asap, inconsolata, mavenPro } from "./fonts/fontsConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adams Portfolio",
  description: "A portfolio showcasing my projects and skills",
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
    <html lang="en">
      <body
        className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable} bg-gray-500`}
      >
        {children}
      </body>
    </html>
  );
}
