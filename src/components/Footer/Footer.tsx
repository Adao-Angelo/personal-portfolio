import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="text-center prose">
      <h2 className="font-bold font-sora text-[2rem] mb-[1.1rem] leading-loose">
        Let’s connect
      </h2>
      <p className="text-[1.2rem] leading-loose px-[4rem]">
        Shoot me email to chat about my work or just like to say hey 👋
      </p>
      <div className="flex gap-[2rem] my-[1.1rem] justify-center">
        <Button state="active">
          <Mail></Mail>
        </Button>
        <Button state="active">
          <Github></Github>
        </Button>
        <Button state="active">
          <Linkedin></Linkedin>
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Button variant="secondary">
          <ArrowUp></ArrowUp>
        </Button>
      </div>
      <p className="text-[1.2rem] text-neutral-500">
        © Designed and coded by Nigar Safarova 💜
      </p>
    </footer>
  );
}
