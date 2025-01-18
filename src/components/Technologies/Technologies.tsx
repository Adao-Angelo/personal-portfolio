import {
  FaBootstrap,
  FaDocker,
  FaFigma,
  FaGit,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiGithubactions,
  SiHeroku,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiReactquery,
  SiRedis,
  SiRender,
  SiRxdb,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

export default function Technologies() {
  return (
    <div className="grid gap-4 text-[1.6rem]">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Languages and Frameworks */}
        <FaJs title="JavaScript" className="text-yellow-400" size={24} />
        <SiTypescript title="TypeScript" className="text-blue-600" size={24} />
        <FaReact title="React.js" className="text-blue-500" size={24} />
        <SiNextdotjs
          title="Next.js"
          className="text-black dark:text-white"
          size={24}
        />
        <FaNodeJs title="Node.js" className="text-green-500" size={24} />
        <SiNestjs title="NestJS" className="text-red-500" size={24} />

        {/* Databases */}
        <SiPostgresql title="PostgreSQL" className="text-blue-500" size={24} />
        <SiMysql title="MySQL" className="text-blue-700" size={24} />
        <SiMongodb title="MongoDB" className="text-green-500" size={24} />
        <SiRedis title="Redis" className="text-red-600" size={24} />

        {/* Styling Tools */}
        <FaBootstrap title="Bootstrap" className="text-purple-500" size={24} />
        <SiTailwindcss
          title="TailwindCSS"
          className="text-blue-400"
          size={24}
        />
        <FaSass title="SASS" className="text-pink-500" size={24} />
        <SiStyledcomponents
          title="Styled-components"
          className="text-yellow-400"
          size={24}
        />

        {/* DevOps and Tools */}
        <FaDocker title="Docker" className="text-blue-500" size={24} />
        <FaGit title="Git" className="text-orange-600" size={24} />
        <SiGithubactions
          title="GitHub Actions"
          className="text-black dark:text-white"
          size={24}
        />
        <SiHeroku title="Heroku" className="text-purple-500" size={24} />
        <SiRender title="Render" className="text-blue-500" size={24} />
        <SiNetlify title="Netlify" className="text-green-500" size={24} />

        {/* Testing */}
        <SiJest title="Jest" className="text-red-500" size={24} />
        <SiVitest title="Vitest" className="text-green-500" size={24} />

        {/* Other Tools */}
        <FaFigma title="Figma" className="text-red-500" size={24} />
        <SiRxdb title="RXJS" className="text-purple-500" size={24} />
        <SiReactquery title="React Query" className="text-pink-500" size={24} />
      </div>
    </div>
  );
}
