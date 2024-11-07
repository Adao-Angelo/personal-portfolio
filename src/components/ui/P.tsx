import React from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLParagraphElement> {}

export default function P(props: Props): JSX.Element {
  return (
    <p
      {...props}
      className="font-regular text-[2.4rem] transition-all duration-300 "
    >
      {props.children}
    </p>
  );
}
