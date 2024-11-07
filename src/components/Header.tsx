import React from "react";
import A from "./ui/A";
import { LightbulbIcon } from "lucide-react";

interface HeaderProps extends React.HTMLProps<HTMLElement> {}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="flex justify-between items-center w-full" {...props}>
      <h1 className="text-neutral-800 font-bold text-[4.8rem] transition-all duration-300   dark:text-neutral-50">
        aj
        <span className="text-purple-600 dark:text-purple-500">.</span>
      </h1>
      <nav>
        <ul className="flex gap-[3rem] items-center ">
          <li>
            <A href="/">Home</A>
          </li>
          <li>
            <A href="/about">About</A>
          </li>
          <li>
            <A href="#projects">Projects</A>
          </li>
          <li>
            <A href="#contact">Resume</A>
          </li>
          <li>
            <LightbulbIcon>Mode</LightbulbIcon>
          </li>
        </ul>
      </nav>
    </header>
  );
}
