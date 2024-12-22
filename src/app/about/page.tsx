export default function About() {
  return (
    <div className="flex flex-col gap-[2.9rem] mt-[7rem] mb-[6rem]">
      <h1 className="font-bold font-sora text-[3.2rem] text-center md:mb-[2rem]">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row-reverse gap-[2.9rem] md:gap-[5rem] md:mb-[17rem]">
        <div className="flex flex-col gap-[2.9rem] md:w-[54.2rem]">
          <h2 className="font-bold font-sora text-[2rem]">Quote...</h2>
          <p className="text-[1.6rem]">
            I believe technology, when combined with passion and persistence,
            has the power to create a better world.
          </p>

          <p className="text-[1.6rem]">
            I am a passionate and driven full-stack developer with an unwavering
            love for technology. I thrive in challenging environments that push
            me beyond my comfort zone, enabling continuous learning and personal
            growth. My dedication to creating impactful digital solutions is
            matched by a commitment to refining my skills every day, turning
            ideas into meaningful and user-centered experiences.
          </p>

          <p className="text-[1.6rem]">
            I believe that every challenge is an opportunity to become better
            and that technology is a powerful tool to bring about positive
            change. Let&#39;s create something amazing together!
          </p>
        </div>

        <div className="md:max-w-[36.9rem]">
          <img
            className="rounded-[0.5rem] md:h-[40rem] object-cover"
            src="/dev.jpeg"
            alt="Developer Portrait"
          />
        </div>
      </div>

      <div className="lg:px-[10.3rem]">
        <h2 className="font-bold font-sora text-[2rem] text-center mb-[2rem]">
          Skills
        </h2>
        <p className="text-[1.6rem] mb-[2rem]">
          Throughout these years, I have worked immensely to build this arsenal
          of technologies.
        </p>
        <div className="grid gap-[2rem] md:gap-[4.2rem] text-[1.6rem]">
          {/* Languages and Frameworks */}
          <div>
            <h3 className="font-bold">Languages and Frameworks</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <img
                src="https://img.shields.io/badge/-Javascript-05122A?style=flat&logo=Javascript"
                alt="JavaScript"
              />
              <img
                src="https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/-React.Js-05122A?style=flat&logo=react"
                alt="React.js"
              />
              <img
                src="https://img.shields.io/badge/-Next.Js-05122A?style=flat&logo=next.js"
                alt="Next.js"
              />
              <img
                src="https://img.shields.io/badge/-Node.Js-05122A?style=flat&logo=node.js"
                alt="Node.js"
              />
              <img
                src="https://img.shields.io/badge/-Nest.Js-05122A?style=flat&logo=nestjs"
                alt="NestJS"
              />
              {/* <img
              src="https://img.shields.io/badge/-Python-05122A?style=flat&logo=python"
              alt="Python"
            /> */}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="font-bold">Databases</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <img
                src="https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql"
                alt="PostgreSQL"
              />
              <img
                src="https://img.shields.io/badge/-MySQL-05122A?style=flat&logo=mysql"
                alt="MySQL"
              />
              <img
                src="https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb"
                alt="MongoDB"
              />
              <img
                src="https://img.shields.io/badge/-Redis-05122A?style=flat&logo=redis"
                alt="Redis"
              />
            </div>
          </div>

          {/* Styling Tools */}
          <div>
            <h3 className="font-bold">Styling Tools</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <img
                src="https://img.shields.io/badge/-Bootstrap-05122A?style=flat&logo=bootstrap"
                alt="Bootstrap"
              />
              <img
                src="https://img.shields.io/badge/-TailwindCSS-05122A?style=flat&logo=tailwindcss"
                alt="TailwindCSS"
              />
              <img
                src="https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass"
                alt="SASS"
              />
              <img
                src="https://img.shields.io/badge/-Styled--Components-05122A?style=flat&logo=styled-components"
                alt="Styled-components"
              />
            </div>
          </div>

          {/* DevOps and Tools */}
          <div>
            <h3 className="font-bold">DevOps and Tools</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <img
                src="https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker"
                alt="Docker"
              />
              <img
                src="https://img.shields.io/badge/-Git-05122A?style=flat&logo=git"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/-GitHub%20Actions-05122A?style=flat&logo=githubactions"
                alt="GitHub Actions"
              />
              <img
                src="https://img.shields.io/badge/-Heroku-05122A?style=flat&logo=heroku"
                alt="Heroku"
              />
              <img
                src="https://img.shields.io/badge/-Render-05122A?style=flat&logo=render"
                alt="Render"
              />
              <img
                src="https://img.shields.io/badge/-Netlify-05122A?style=flat&logo=netlify"
                alt="Netlify"
              />
            </div>
          </div>

          {/* Testing */}
          <div>
            <h3 className="font-bold">Testing</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <img
                src="https://img.shields.io/badge/-Jest-05122A?style=flat&logo=jest"
                alt="Jest"
              />
              <img
                src="https://img.shields.io/badge/-Vitest-05122A?style=flat&logo=vitest"
                alt="Vitest"
              />
            </div>
          </div>

          {/* Other Tools */}
          <div>
            <h3 className="font-bold">Other Tools</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <img
                src="https://img.shields.io/badge/-Figma-05122A?style=flat&logo=figma"
                alt="Figma"
              />
              <img
                src="https://img.shields.io/badge/-RXJS-05122A?style=flat&logo=reactivex"
                alt="RXJS"
              />
              <img
                src="https://img.shields.io/badge/-Agile-05122A?style=flat&logo=agile"
                alt="Agile"
              />
              <img
                src="https://img.shields.io/badge/-React%20Query-05122A?style=flat&logo=reactquery"
                alt="React Query"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:gap-[4.2rem] gap-[2.2rem] mt-[4rem]">
          <h2 className="font-bold font-sora text-[2rem] text-center">
            Interests
          </h2>
          <p className="text-[1.6rem]">
            I am passionate about leveraging technology to solve real-world
            problems and constantly seek ways to improve my skills. My main
            interests include building intuitive user interfaces with modern
            frameworks like React and Next.js, as well as exploring the
            potential of AI in enhancing human experiences.
          </p>
          <p className="text-[1.6rem]">
            I believe that technology is a powerful tool to empower people and
            bring about positive change. I enjoy helping others by simplifying
            complex technical concepts and creating solutions that make their
            lives easier.
          </p>
          <p className="text-[1.6rem]">
            Beyond development, I enjoy participating in hackathons,
            contributing to open-source projects, and staying updated with the
            latest advancements in software engineering.
          </p>
        </div>
      </div>
    </div>
  );
}
