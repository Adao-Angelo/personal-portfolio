import React from "react";

type ButtonProps = {
  variant?: "default" | "outline";
  children: React.ReactNode;
};

export default function Button({ variant = "default", children }: ButtonProps) {
  const baseStyles = "rounded-[5px] py-[15px] px-[16px] text-center";

  const defaultStyles = "bg-purple-500 text-neutral-50 border-none";
  const outlineStyles = "bg-none border-2 border-purple-500 text-neutral-900";

  const darkDefaultStyles = "bg-purple-200 text-neutral-900 border-none";
  const darkOutlineStyles =
    "bg-none border-2 border-neutral-500 text-neutral-50";

  const buttonStyles = `${baseStyles} ${
    variant === "default" ? defaultStyles : outlineStyles
  }`;

  const darkButtonStyles = `${baseStyles} ${
    variant === "default" ? darkDefaultStyles : darkOutlineStyles
  }`;

  return (
    <button
      className={`${buttonStyles} dark:${darkButtonStyles} transition-all ease-in-out duration-200`}
    >
      {children}
    </button>
  );
}
