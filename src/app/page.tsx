import { Project } from "@/components/Project";
import Button from "@/components/ui/Button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main>
        <div className="mt-[7.9rem]">
          <div>
            <h1 className="font-sora font-bold text-[3.2rem]">
              Hi, I am Adam John.
            </h1>
            <h1 className="font-sora font-bold text-[2.8rem]  mt-[0.5rem] mb-[2.9rem] text-purple-900 dark:text-purple-300 ">
              Full-stack Developer
            </h1>
            <p className="text-[1.6rem] mb-[3.1rem]">
              I'm a tech enthusiast and developer, specializing in building
              scalable and user-friendly web applications, combining expertise
              in both front-end and back-end to deliver amazing solutions.
            </p>
            <div>
              <div className="flex gap-[2rem] my-[1.1rem]">
                <Button>
                  <Github></Github>
                </Button>
                <Button>
                  <Linkedin></Linkedin>
                </Button>
                <Button state="outline">GET IN TOUCH </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[5rem] items-center">
          <Button variant="secondary">
            <ArrowDown></ArrowDown>
          </Button>
        </div>
        {/* __Projects */}
        <div className="">
          <h2 className="font-bold font-sora mt-[3.5rem] mb-[3rem] text-[2.8rem] text-center">
            Projects
          </h2>
          {/* __Project Cards */}
          <div className="flex flex-col gap-[3rem] ">
            <Project.Root>
              <Project.Image
                src="https://via.placeholder.com/300"
                alt="Project Image"
              />
              <Project.Content
                title="Awesome Project"
                description="This is a description of the project."
              />
              <Project.Technologies>
                <span>React</span>
                <span>TypeScript</span>
                <span>Next.js</span>
              </Project.Technologies>

              <Project.Actions>
                <Button>VIEW CODE</Button>
                <Button state="outline">LIVE DEMO</Button>
              </Project.Actions>
            </Project.Root>
            <Project.Root>
              <Project.Image
                src="https://via.placeholder.com/300"
                alt="Project Image"
              />
              <Project.Content
                title="Awesome Project"
                description="This is a description of the project."
              />
              <Project.Technologies>
                <span>React</span>
                <span>TypeScript</span>
                <span>Next.js</span>
              </Project.Technologies>

              <Project.Actions>
                <Button>VIEW CODE</Button>
                <Button state="outline">LIVE DEMO</Button>
              </Project.Actions>
            </Project.Root>
          </div>
        </div>
        {/* __About */}
        <div className="flex flex-col gap-[2.9rem] mt-[7rem] mb-[6rem]">
          <h2 className="font-bold font-sora text-[2.8rem]">Hi there!</h2>
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
            change. Let's create something amazing together!
          </p>
          <div>
            <Button>READ MORE</Button>
          </div>
          <div className="">
            <img className="rounded-[0.5rem]" src="/dev.jpeg" alt="dev" />
          </div>
        </div>
      </main>
    </div>
  );
}
