"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSProvider: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
};

export default AOSProvider;
