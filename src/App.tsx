import RootLayout from "./components/Layout";
import Button from "./components/ui/Button";
import H1 from "./components/ui/H1";
import H2 from "./components/ui/H2";
import P from "./components/ui/P";
import "./config/Fonts";
import { Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <main>
      <RootLayout>
        <div className="pt-[13.8rem] pb-[14.6rem] text-center">
          <H1 _className="font-sora text-neutral-800 dark:text-neutral-50">
            Hi, I’m Adão Ângelo João.
          </H1>
          <H2 _className="mt-[3.2rem] dark:text-neutral-50 text-purple-800 dark:text-purple-300">
            Front-end Developer
          </H2>
          <P _className="my-[3.2rem]">
            Lorem ipsum dolor sit amet consectetur. Ligula nunc non commodo
            scelerisque gravida.
          </P>

          <div className="flex gap-[2.5rem] justify-center">
            <Button>
              <Github></Github>
            </Button>
            <Button>
              <Linkedin></Linkedin>
            </Button>
            <Button variant="outline">GET IN TOUCH</Button>
            <Button variant="outline">RESUME</Button>
          </div>
        </div>
      </RootLayout>
    </main>
  );
}
