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
    <div className="grid gap-4 text-[1.6rem] my-[10rem]">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Languages and Frameworks */}
        <FaJs title="JavaScript" className="text-yellow-400" size={50} />
        <SiTypescript title="TypeScript" className="text-blue-600" size={50} />
        <FaReact title="React.js" className="text-blue-500" size={50} />
        <SiNextdotjs
          title="Next.js"
          className="text-black dark:text-white"
          size={50}
        />
        <FaNodeJs title="Node.js" className="text-green-500" size={50} />
        <SiNestjs title="NestJS" className="text-red-500" size={50} />

        {/* Databases */}
        <SiPostgresql title="PostgreSQL" className="text-blue-500" size={50} />
        <SiMysql title="MySQL" className="text-blue-700" size={50} />
        <SiMongodb title="MongoDB" className="text-green-500" size={50} />
        <SiRedis title="Redis" className="text-red-600" size={50} />

        {/* Styling Tools */}
        <FaBootstrap title="Bootstrap" className="text-purple-500" size={50} />
        <SiTailwindcss
          title="TailwindCSS"
          className="text-blue-400"
          size={50}
        />
        <FaSass title="SASS" className="text-pink-500" size={50} />
        <SiStyledcomponents
          title="Styled-components"
          className="text-yellow-400"
          size={50}
        />

        {/* DevOps and Tools */}
        <FaDocker title="Docker" className="text-blue-500" size={50} />
        <FaGit title="Git" className="text-orange-600" size={50} />
        <SiGithubactions
          title="GitHub Actions"
          className="text-black dark:text-white"
          size={50}
        />
        <SiHeroku title="Heroku" className="text-purple-500" size={50} />
        <SiRender title="Render" className="text-blue-500" size={50} />
        <SiNetlify title="Netlify" className="text-green-500" size={50} />

        {/* Testing */}
        <SiJest title="Jest" className="text-red-500" size={50} />
        <SiVitest title="Vitest" className="text-green-500" size={50} />

        {/* Other Tools */}
        <FaFigma title="Figma" className="text-red-500" size={50} />
        <SiRxdb title="RXJS" className="text-purple-500" size={50} />
        <SiReactquery title="React Query" className="text-pink-500" size={50} />
      </div>
    </div>
  );
}
