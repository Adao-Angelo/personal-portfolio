import Badge from "./ui/Badge";

import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
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
        <Badge icon={FaHtml5} iconColor={"text-red"}>
          HTML
        </Badge>
        <Badge icon={FaCss3Alt} iconColor={"text-blue"}>
          CSS
        </Badge>
        <Badge icon={FaJs} iconColor={"text-yellow"}>
          JavaScript
        </Badge>
        <Badge icon={SiTypescript} iconColor={"text-blue-500"}>
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
        <Badge icon={SiRedux} iconColor={"text-purple-500"}>
          Redux
        </Badge>

        {/* Backend */}
        <Badge icon={FaNodeJs} iconColor={"text-green"}>
          Node.js
        </Badge>
        <Badge icon={SiExpress} iconColor={"text-gray-400"}>
          Express
        </Badge>
        <Badge icon={SiPrisma} iconColor={"text-indigo-400"}>
          Prisma
        </Badge>
        <Badge icon={SiMongodb} iconColor={"text-green-600"}>
          MongoDB
        </Badge>
        <Badge icon={SiPostgresql} iconColor={"text-blue-700"}>
          PostgreSQL
        </Badge>
        <Badge icon={FaDatabase} iconColor={"text-yellow-600"}>
          SQL
        </Badge>
        <Badge icon={FaDocker} iconColor={"text-blue-400"}>
          Docker
        </Badge>
      </div>
    </div>
  );
}
