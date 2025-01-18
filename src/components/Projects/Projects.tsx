import { Project } from "@/components/Project";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiGmail,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
} from "react-icons/si";
import { toast } from "react-toastify";
import Button from "../ui/Button";

export default function Projects() {
  const notify = (message: string) => {
    toast(message, {
      type: "warning",
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-[3rem] lg:gap-[7rem] ">
      <Project.Root>
        <Project.Image src="/projects/todo.png" alt="Project Image" />
        <Project.Content
          title="News Aggregations"
          description="To-Do List, your ultimate task management tool. This project is designed to help you stay organized and productive with features like drag-and-drop task management, a clean and modern UI, and real-time state management."
        />
        <Project.Technologies>
          <SiTypescript size={24} />
          <FaReact size={24} />
        </Project.Technologies>

        <Project.Actions>
          <Link href="https://github.com/Adao-Angelo/todo-list" target="_blank">
            <Button>VIEW CODE</Button>
          </Link>
          <Link href="https://todo-list-app-009.netlify.app/" target="_blank">
            <Button state="outline">LIVE DEMO</Button>
          </Link>
        </Project.Actions>
      </Project.Root>
      <Project.Root>
        <Project.Image src="projects/chat-ai.png" alt="Project Image" />
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
          <SiTypescript size={24} />
          <RiNextjsLine size={24} />
        </Project.Technologies>

        <Project.Actions>
          <Link href="https://github.com/Adao-Angelo/chat-AI" target="_blank">
            <Button>VIEW CODE</Button>
          </Link>
          <Link href="https://chat-ai-lilac-six.vercel.app/" target="_blank">
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
          <SiTypescript size={24} />
          <FaReact size={24} />
          <SiTauri size={24} />
          <SiTailwindcss size={24} />
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
        Tree of Happiness College order to help productivity when buying foin the cafeteria. "
        />
        <Project.Technologies>
          <SiExpress size={24} />
          <SiTypescript size={24} />
          <SiPrisma size={24} />
          <SiPostgresql size={24} />
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
        <Project.Image src="/projects/news.png" alt="Project Image" />
        <Project.Content
          title="News Aggregations"
          description="
           News Aggregations is a news blog that brings together information from various sources, offering updated and relevant content on a variety of topics. The objective is to provide users with a practical and informative experience, centralizing news in a single place."
        />
        <Project.Technologies>
          <SiTypescript size={24} />
          <FaReact size={24} />
          <SiGmail size={24} />
        </Project.Technologies>

        <Project.Actions>
          <Link
            href="https://github.com/Adao-Angelo/news-aggregations"
            target="_blank"
          >
            <Button>VIEW CODE</Button>
          </Link>
          <Link href="https://news-aggregations.vercel.app/" target="_blank">
            <Button state="outline">LIVE DEMO</Button>
          </Link>
        </Project.Actions>
      </Project.Root>
    </div>
  );
}
