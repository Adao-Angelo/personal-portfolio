import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import A from "./ui/A";

interface HeaderProps extends React.HTMLProps<HTMLElement> {}

export default function Header(props: HeaderProps): JSX.Element {
  const [themeState, setThemeState] = useState<"light" | "dark">();

  useEffect(() => {
    setThemeState("dark");
  }, []);
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
          <li
            className="cursor-pointer"
            onClick={() => {
              setThemeState(themeState === "light" ? "dark" : "light");
            }}
          >
            {themeState == "light" ? <Sun></Sun> : <Moon></Moon>}
          </li>
        </ul>
      </nav>
    </header>
  );
}
