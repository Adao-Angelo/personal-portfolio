import React from "react";

interface H2Props extends React.AnchorHTMLAttributes<HTMLParagraphElement> {}

export default function H2(props: H2Props): JSX.Element {
  return (
    <h2
      {...props}
      className="font-bold text-[3.2rem] transition-all duration-300  dark:text-neutral-50  "
    >
      {props.children}
    </h2>
  );
}
