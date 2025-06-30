import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import Badge from "./ui/Badge";

export default function Technologies() {
  const techs = [
    { icon: FaGithub, color: "text-gray-50", name: "GitHub" },
    { icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
    { icon: FaCss3Alt, color: "text-blue", name: "CSS3" },
    { icon: FaJs, color: "text-yellow", name: "JavaScript" },

    {
      icon: SiNextdotjs,
      color: "text-white",
      name: "Next.js",
    },
    { icon: FaNodeJs, color: "text-green", name: "Node.js" },
  ];
  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap gap-[1.6rem] justify-center items-center">
        {techs.map((tech, index) => (
          <Badge key={index} icon={tech.icon} iconColor={tech.color}>
            {tech.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
