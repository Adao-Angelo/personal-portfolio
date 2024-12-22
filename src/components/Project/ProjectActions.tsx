import { ReactNode } from "react";

interface ProjectActionsProps {
  children: ReactNode;
}

export default function ProjectActions({ children }: ProjectActionsProps) {
  return <div className="flex gap-[0.8rem] px-[1.6rem]">{children}</div>;
}
