"use client";

import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";

interface ScrollToDownProps {
  to: string;
}

export default function ScrollToDown({ to }: ScrollToDownProps) {
  const scrollTo = () => {
    const headerElement = document.querySelector(`#${to}`);
    console.log(headerElement);
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Button variant="secondary" onClick={scrollTo}>
      <ArrowDown></ArrowDown>
    </Button>
  );
}
