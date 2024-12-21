import type { Metadata } from "next";
import { inter, sora } from "./fonts/fontsConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer | Portfolio",
  description: "developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
