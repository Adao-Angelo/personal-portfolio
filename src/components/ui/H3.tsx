import React from "react";

interface H1Props extends React.AnchorHTMLAttributes<HTMLParagraphElement> {}

export default function H1(props: H1Props): JSX.Element {
  return (
    <h1
      {...props}
      className="text-neutral-800 font-bold text-[5.6rem] transition-all duration-300  dark:text-neutral-50"
    >
      {props.children}
    </h1>
  );
}
