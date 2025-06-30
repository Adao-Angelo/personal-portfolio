import Badge from "./ui/Badge";

import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

export default function Techs() {
  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap gap-[1.6rem] justify-center items-center">
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
          Javascript
        </Badge>
        <Badge icon={FaReact} iconColor={"text-blue"}>
          React
        </Badge>
        <Badge icon={FaNodeJs} iconColor={"text-green"}>
          Node.js
        </Badge>
      </div>
    </div>
  );
}
