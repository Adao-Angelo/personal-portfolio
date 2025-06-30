import Badge from "./ui/Badge";

import { FaDocker, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Techs() {
  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap gap-[1.6rem] justify-center items-center">
        {/* Frontend */}
        <Badge icon={FaGithub} iconColor={"text-gray-200"}>
          GitHub
        </Badge>

        <Badge icon={SiTypescript} iconColor={"text-blue"}>
          TypeScript
        </Badge>
        <Badge icon={FaReact} iconColor={"text-sky-400"}>
          React
        </Badge>
        <Badge icon={SiNextdotjs} iconColor={"text-black dark:text-white"}>
          Next.js
        </Badge>
        <Badge icon={SiTailwindcss} iconColor={"text-cyan-400"}>
          Tailwind
        </Badge>

        {/* Backend */}
        <Badge icon={FaNodeJs} iconColor={"text-green"}>
          Node.js
        </Badge>
        <Badge icon={SiNestjs} iconColor={"text-red"}>
          Nest
        </Badge>
        <Badge icon={SiPrisma} iconColor={"text-indigo-400"}>
          Prisma
        </Badge>
        <Badge icon={SiMongodb} iconColor={"text-green-600"}>
          MongoDB
        </Badge>
        <Badge icon={FaDocker} iconColor={"text-blue"}>
          Docker
        </Badge>
      </div>
    </div>
  );
}
