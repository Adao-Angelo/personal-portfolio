import classNames from "classnames";
import React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonState = "default" | "outline" | "disabled" | "active" | "hover";
type ButtonSize = "mobile" | "web";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  state?: ButtonState;
  size?: ButtonSize;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const buttonColors = {
  primary: {
    default:
      "bg-purple-500 text-neutral-50 dark:bg-purple-200 dark:text-neutral-900",
    outline:
      "border border-purple-500 text-neutral-900 bg-transparent dark:border-neutral-500 dark:text-neutral-50",
    disabled:
      "text-neutral-400 bg-transparent cursor-not-allowed dark:text-neutral-500",
    active: "bg-black text-white dark:bg-neutral-50 dark:text-neutral-900",
    hover:
      "bg-transparent text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50",
  },
  secondary: {
    default: "text-neutral-900 underline dark:text-neutral-50",
    link: "text-purple-500 underline dark:text-purple-200",
    disabled: "text-neutral-400 cursor-not-allowed dark:text-neutral-500",
    hover: "font-bold text-neutral-400 dark:underline dark:text-neutral-500",
  },
} as Record<ButtonVariant, Record<ButtonState | "link", string>>; // Tipagem explícita

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  state = "default",
  size = "mobile",
  icon,
  onClick,
}) => {
  const buttonClass = classNames(
    "px-[1.6rem] rounded-[0.4rem] font-bold transition-colors duration-300 flex items-center justify-center gap-[1.2rem]",
    size === "mobile" ? "text-[1.2rem] py-[1.1rem]" : "text-[1.4rem] py-[1rem]",
    buttonColors[variant][state],
    {
      "cursor-pointer": state !== "disabled",
    }
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={state === "disabled"}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
