import { ReactNode } from "react";

interface ProjectRootProps {
  children: ReactNode;
  dataAos?: string;
}

export default function ProjectRoot({ children, dataAos }: ProjectRootProps) {
  return (
    <div
      data-aos={dataAos}
      className="border border-neutral-200  rounded-[0.5rem] dark:border-neutral-600 flex flex-col gap-[2.4rem] pb-[3.9rem]"
    >
      {children}
    </div>
  );
}
