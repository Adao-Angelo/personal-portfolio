"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

export default function Footer() {
  const scrollToHeader = () => {
    const headerElement = document.querySelector("#Header");
    console.log(headerElement);
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="text-center prose md:mt-[15.7rem]">
      <div className="md:flex md:justify-between md:mb-[5.9rem]">
        <div>
          <h2 className="font-bold md:text-left font-sora text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] mb-[1.1rem] leading-loose">
            Let’s connect
          </h2>
          <p className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] md:text-left leading-loose px-[4rem] md:px-[0]">
            Shoot me email to chat about my work or just like to say hey 👋
          </p>
        </div>
        <div>
          <div className="flex gap-[2rem] my-[1.1rem] justify-center">
            <Link href="mailto:adaobegginer@gmail.com" target="_blank">
              <Button state="active">
                <Mail />
              </Button>
            </Link>
            <Link target="_blank" href="https://github.com/Adao-Angelo">
              <Button state="active">
                <Github />
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ad%C3%A3o-%C3%A2ngelo-jo%C3%A3o-238233335/"
            >
              <Button state="active">
                <Linkedin />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Button variant="secondary" onClick={scrollToHeader}>
              <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
      <p className="text-[1.2rem] md:text-[1.6rem] text-neutral-500">
        © Designed by Nigar Safarova 💜
      </p>
    </footer>
  );
}
