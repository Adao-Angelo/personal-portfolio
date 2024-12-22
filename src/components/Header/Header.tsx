"use client";

import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      localStorage.setItem("theme", newMode ? "dark" : "light");

      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-[3.2rem] font-bold">
        aj<span className="text-purple-600">.</span>
      </h1>

      <div className="flex items-center gap-4">
        <div className="md:hidden" onClick={toggleMenu}>
          <AlignJustify className="cursor-pointer dark:hover:text-purple-400 hover:text-purple-900 " />
        </div>

        {isMenuOpen && (
          <div className="fixed h-[100vh] left-0 top-0 right-0 bg-white dark:bg-neutral-800 p-[2.5rem] md:hidden rounded-[0.4rem]">
            <div className="flex justify-between">
              <div></div>
              <X
                className=" cursor-pointer dark:hover:text-purple-400 hover:text-purple-900"
                onClick={toggleMenu}
              ></X>
            </div>
            <div className="flex justify-center items-center h-[80vh] ">
              <div>
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
              </div>
            </div>
          </div>
        )}

        <div className="md:flex hidden items-center gap-[3rem]">
          <Link
            className="text-[1.6rem] dark:hover:text-purple-400 hover:text-purple-900"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[1.6rem] dark:hover:text-purple-400 hover:text-purple-900"
            href="/#project"
          >
            Projects
          </Link>
          <Link
            className="text-[1.6rem] dark:hover:text-purple-400 hover:text-purple-900"
            href="/about"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
