"use client";

import React, { useEffect, useState } from "react";

type TypingEffectProps = {
  children: string;
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBeforeErase?: number;
};

const TypingEffect: React.FC<TypingEffectProps> = ({
  children,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBeforeErase = 2000,
}) => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < children.length) {
        setText((prev) => prev + children[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === children.length) {
        setTimeout(() => setIsDeleting(true), delayBeforeErase);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    };

    const speed = isDeleting ? erasingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [
    index,
    isDeleting,
    children,
    typingSpeed,
    erasingSpeed,
    delayBeforeErase,
  ]);

  return <span>{text}</span>;
};

export default TypingEffect;
