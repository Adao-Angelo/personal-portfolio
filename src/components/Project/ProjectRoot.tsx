import { ReactNode } from "react";

interface ProjectRootProps {
  children: ReactNode;
}

export default function ProjectRoot({ children }: ProjectRootProps) {
  return (
    <div className="border border-neutral-200  dark:border-neutral-600 flex flex-col gap-[2.4rem] pb-[3.9rem]">
      {children}
    </div>
  );
}
