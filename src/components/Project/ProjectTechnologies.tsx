import { ReactNode } from "react";

interface ProjectTechnologiesProps {
  children: ReactNode;
}

export default function ProjectTechnologies({
  children,
}: ProjectTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-[0.8rem] px-[1.6rem]">{children}</div>
  );
}
