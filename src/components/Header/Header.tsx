"use client";

import { useThemeContext } from "@/context/ThemeProvider";
import { AlignJustify, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header id="Header" className="flex justify-between items-center  p-4">
      <h1 className="text-[3.2rem] font-bold">
        aj<span className="text-purple-600">.</span>
      </h1>

      <div className="flex items-center gap-4">
        <div className="md:hidden" onClick={toggleMenu}>
          <AlignJustify className="cursor-pointer dark:hover:text-purple-400 hover:text-purple-900 " />
        </div>

        {isMenuOpen && (
          <div className="fixed h-[100vh] left-0 top-0 right-0 bg-white z-20 dark:bg-neutral-800 p-[2.5rem] md:hidden rounded-[0.4rem]">
            <div className="flex justify-between">
              <div></div>
              <X
                className=" cursor-pointer dark:hover:text-purple-400 hover:text-purple-900"
                onClick={toggleMenu}
              ></X>
            </div>
            <div className="flex justify-center items-center h-[80vh] ">
              <div className="text-center grid gap-[2rem]">
                <Link
                  className="block text-[1.6rem] dark:hover:text-purple-400 hover:text-purple-900 py-2"
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className="block text-[1.6rem] dark:hover:text-purple-400 hover:text-purple-900 py-2"
                  href="/#project"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  className="block text-[1.6rem] dark:hover:text-purple-400 hover:text-purple-900 py-2"
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <button
                  className="text-[1.6rem]  w-[10rem] px-[2rem] py-[1rem] rounded-full bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-400 text-purple-50 dark:text-purple-50"
                  onClick={toggleTheme}
                >
                  {theme == "dark" ? (
                    <Sun></Sun>
                  ) : (
                    <Moon className="ml-[4rem]"></Moon>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="md:flex hidden items-center gap-[3rem]">
          <Link
            className="text-[1.6rem] font-medium dark:hover:text-purple-400 hover:text-purple-900"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[1.6rem] font-medium dark:hover:text-purple-400 hover:text-purple-900"
            href="/#project"
          >
            Projects
          </Link>
          <Link
            className="text-[1.6rem] font-medium dark:hover:text-purple-400 hover:text-purple-900"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-[1.6rem] font-medium dark:hover:text-purple-400 hover:text-purple-900"
            href="/cv/cv-fullstack.pdf"
            target="_blank"
          >
            cv
          </Link>

          <button
            className="text-[1.6rem] px-[2rem] py-[1rem] rounded-full bg-purple-500 hover:bg-purple-600 dark:hover:bg-purple-500 dark:bg-purple-400 text-purple-50 dark:text-purple-50"
            onClick={toggleTheme}
          >
            {theme == "dark" ? <Sun></Sun> : <Moon></Moon>}
          </button>
        </div>
      </div>
    </header>
  );
}
