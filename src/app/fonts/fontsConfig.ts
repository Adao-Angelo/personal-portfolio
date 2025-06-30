import { Asap, Inconsolata, Maven_Pro } from "next/font/google";

export const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});
