import RootLayout from "./components/Layout";
import Button from "./components/ui/Button";
import H1 from "./components/ui/H1";
import H2 from "./components/ui/H2";
import P from "./components/ui/P";
import "./config/Fonts";
import { GithubIcon, Linkedin } from "lucide-react";

export default function App() {
  return (
    <main>
      <RootLayout>
        <div className="pt-[13.8rem] pb-[14.6rem]">
          <H1>Hi, I’m Adão Ângelo João.</H1>
          <H2 className="text-red-300 p-3">Front-end Developer</H2>
          <P className="w-[66.3rem]">
            Lorem ipsum dolor sit amet consectetur. Ligula nunc non commodo
            scelerisque gravida.
          </P>

          <div className="flex gap-[2.5rem]">
            <Button>
              <GithubIcon></GithubIcon>
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
