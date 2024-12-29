"use client";

import { Project } from "@/components/Project";
import ScrollToDown from "@/components/scrollTodown";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import Button from "@/components/ui/Button";
import { useThemeContext } from "@/context/ThemeProvider";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const { theme, toggleTheme } = useThemeContext();
  const notify = (message: string) => {
    toast(message, {
      type: "warning",
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <div>
      <ToastContainer theme={theme} />
      <main>
        <div className="mt-[7.9rem] md:text-center">
          <div>
            <h1 className="font-sora font-bold text-[3.2rem] md:text-[5.6rem]">
              <TypingEffect
                typingSpeed={120}
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
        <div id="project">
          <h2 className="font-bold font-sora mt-[3.5rem] mb-[3rem] md:mb-[11.4rem] text-[2.8rem] text-center">
            Projects
          </h2>
          {/* __Project Cards */}
          <div className="grid md:grid-cols-2 gap-[3rem] lg:gap-[7rem] ">
            <Project.Root>
              <Project.Image src="projects/ai.webp" alt="Project Image" />
              <Project.Content
                title="Chat AI "
                description="ChatBot is an advanced AI-powered chatbot built 
                with Next.js and TypeScript, leveraging the Vercel SDK for 
                AI integration and Google's Gemini for semantic understanding.
                 The chatbot is designed to provide intelligent, real-time 
                 conversations while ensuring seamless user experience with
                  Tailwind CSS for modern design."
              />
              <Project.Technologies>
                <img
                  src="https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/-Gemini-05122A?style=flat&logo=google"
                  alt="Gemini"
                />
                <img
                  src="https://img.shields.io/badge/-AI-05122A?style=flat&logo=artificial-intelligence"
                  alt="AI"
                />
                <img
                  src="https://img.shields.io/badge/-Next.Js-05122A?style=flat&logo=next.js"
                  alt="Next.js"
                />
              </Project.Technologies>

              <Project.Actions>
                <Link
                  href="https://github.com/Adao-Angelo/chat-AI"
                  target="_blank"
                >
                  <Button>VIEW CODE</Button>
                </Link>
                <Link
                  href="https://chat-ai-lilac-six.vercel.app/"
                  target="_blank"
                >
                  <Button state="outline">LIVE DEMO</Button>
                </Link>
              </Project.Actions>
            </Project.Root>
            <Project.Root>
              <Project.Image src="/projects/clock.png" alt="Project Image" />
              <Project.Content
                title="Clock Work"
                description="
                This is a sleek and efficient desktop application for the 
                clock work technique, developed using Tauri, React, and Rust. 
                The app is designed to help users boost productivity by effectively 
                managing their work and break intervals. With a lightweight architecture and modern 
                design, it provides a seamless experience for staying focused and achieving goals.
                "
              />
              <Project.Technologies>
                <img
                  src="https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/-React.Js-05122A?style=flat&logo=react"
                  alt="React.js"
                />
                <img
                  src="https://img.shields.io/badge/-Tauri-05122A?style=flat&logo=tauri"
                  alt="Tauri"
                />
                <img
                  src="https://img.shields.io/badge/-TailwindCSS-05122A?style=flat&logo=tailwindcss"
                  alt="Tailwind CSS"
                />
                <img
                  src="https://img.shields.io/badge/-Rust-05122A?style=flat&logo=rust"
                  alt="Rust"
                />
              </Project.Technologies>

              <Project.Actions>
                <Link
                  href="https://github.com/Adao-Angelo/clock-work"
                  target="_blank"
                >
                  <Button>VIEW CODE</Button>
                </Link>

                <Link href="https://clock-work.vercel.app/" target="_blank">
                  <Button state="outline">LIVE DEMO</Button>
                </Link>
              </Project.Actions>
            </Project.Root>
            <Project.Root>
              <Project.Image src="/projects/meal.png" alt="Project Image" />
              <Project.Content
                title="Easy-Meal"
                description="Easy Meal is an app for shopping products aimed at improving gastronomy, made by the center
                 Colégio Arvore Da Felicidade order to help productivity when buying foin the cafeteria. "
              />
              <Project.Technologies>
                <img
                  src="https://img.shields.io/badge/-JWT-05122A?style=flat&logo=jsonwebtokens"
                  alt="JWT"
                />
                <img
                  src="https://img.shields.io/badge/-Express-05122A?style=flat&logo=express"
                  alt="Express"
                />
                <img
                  src="https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/-Prisma-05122A?style=flat&logo=prisma"
                  alt="Prisma"
                />
                <img
                  src="https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql"
                  alt="PostgreSQL"
                />
              </Project.Technologies>
              <Project.Actions>
                <Button
                  onClick={() => {
                    notify("this project is private");
                  }}
                >
                  VIEW CODE
                </Button>
                <Button state="outline">LIVE DEMO</Button>
              </Project.Actions>
            </Project.Root>
            <Project.Root>
              <Project.Image src="/" alt="Project Image" />
              <Project.Content
                title="NO offense Backend"
                description="
                No Offense is a project designed to automatically 
                censor offensive words and phrases in posts, leveraging 
                advanced context and semantic analysis to detect and suggest 
                corrections for offensive language. The goal is to promote a 
                healthier and more inclusive environment on communication platforms."
              />
              <Project.Technologies>
                <img
                  src="https://img.shields.io/badge/-Gemini-05122A?style=flat&logo=google"
                  alt="Gemini"
                />
                <img
                  src="https://img.shields.io/badge/-Express-05122A?style=flat&logo=express"
                  alt="Express"
                />
                <img
                  src="https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/-JWT-05122A?style=flat&logo=jsonwebtokens"
                  alt="JWT"
                />
                <img
                  src="https://img.shields.io/badge/-Google%20Mail-05122A?style=flat&logo=gmail"
                  alt="Google Mail"
                />
                <img
                  src="https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker"
                  alt="Docker"
                />
                <img
                  src="https://img.shields.io/badge/-Prisma-05122A?style=flat&logo=prisma"
                  alt="Prisma"
                />
                <img
                  src="https://img.shields.io/badge/-Hugging%20Face-05122A?style=flat&logo=huggingface"
                  alt="Hugging Face"
                />
              </Project.Technologies>

              <Project.Actions>
                <Link
                  href="https://github.com/Adao-Angelo/no-offense-backend"
                  target="_blank"
                >
                  <Button>VIEW CODE</Button>
                </Link>
                {/* <Button state="outline">LIVE DEMO</Button> */}
              </Project.Actions>
            </Project.Root>
          </div>
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
              className="rounded-[0.5rem] md:max-w-[36.9rem]"
              src="/dev.jpeg"
              alt="dev"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
