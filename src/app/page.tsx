"use client";

import Projects from "@/components/Projects/Projects";
import ScrollToDown from "@/components/scrollToDown";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import Button from "@/components/ui/Button";
import { useThemeContext } from "@/context/ThemeProvider";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { theme } = useThemeContext();

  return (
    <div>
      <ToastContainer theme={theme} />
      <main>
        <div className="mt-[7.9rem] md:text-center">
          <div>
            <h1 className="font-sora font-bold text-[3.2rem] md:text-[5.6rem]">
              <TypingEffect
                typingSpeed={80}
                erasingSpeed={60}
                delayBeforeErase={2500}
              >
                Hi, I am Adão Ângelo João.
              </TypingEffect>
            </h1>
            <h1 className="font-sora font-bold text-[2.8rem] md:text-[3.2rem]  mt-[0.5rem] mb-[2.9rem] text-purple-900 dark:text-purple-300 ">
              Full-stack Developer
            </h1>
            <p className="text-[1.6rem] md:text-[2.4rem] mb-[3.1rem]">
              I am a tech enthusiast and developer, specializing in building
              scalable and user-friendly web applications.
            </p>
            <div>
              <div className="flex gap-[2rem] my-[1.1rem] md:justify-center">
                <Link target="_blank" href="https://github.com/Adao-Angelo">
                  <Button>
                    <Github></Github>
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/ad%C3%A3o-%C3%A2ngelo-jo%C3%A3o-238233335/"
                >
                  <Button>
                    <Linkedin></Linkedin>
                  </Button>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/ad%C3%A3o-%C3%A2ngelo-jo%C3%A3o-238233335/"
                >
                  <Button state="outline">GET IN TOUCH </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[5rem] items-center">
          <ScrollToDown to="project"></ScrollToDown>
        </div>
        {/* __Projects */}
        <div id="project" className="mt-[30rem]">
          <h2 className="font-bold font-sora mt-[3.5rem] mb-[3rem] md:mb-[11.4rem] text-[2.8rem] text-center">
            Projects
          </h2>
          {/* __Project Cards */}
          <Projects></Projects>
        </div>
        {/* __About */}
        <div className="flex flex-col md:flex-row gap-[6.9rem] md:justify-between mt-[7rem] md:mt-[15.7rem] mb-[6rem]">
          <div className="flex flex-col gap-[2.9rem] md:w-[50.9rem]">
            <h2 className="font-bold font-sora text-[2.8rem] ">Hi there!</h2>
            <p data-aos="fade-up" className="text-[1.6rem]">
              I am a passionate and driven full-stack developer with an
              unwavering love for technology. I thrive in challenging
              environments that push me beyond my comfort zone, enabling
              continuous learning and personal growth. My dedication to creating
              impactful digital solutions is matched by a commitment to refining
              my skills every day, turning ideas into meaningful and
              user-centered experiences.
            </p>
            <p data-aos="fade-up" className="text-[1.6rem]">
              I believe that every challenge is an opportunity to become better
              and that technology is a powerful tool to bring about positive
              change. Let&#39;s create something amazing together!
            </p>
            <div>
              <Link href="/about">
                <Button>READ MORE</Button>
              </Link>
            </div>
          </div>
          <div className="">
            <img
              className="rounded-[0.5rem] md:max-w-[36.9rem] dark:shadow-custom-dark shadow-custom-light"
              src="/dev.jpeg"
              alt="dev"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
