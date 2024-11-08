import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";
import H3 from "./ui/H3";
import Text from "./ui/Text";

export default function Footer() {
  return (
    <section>
      <div>
        <div className="flex  justify-between">
          <H3>Let’s connect</H3>
          <div className="flex gap-[2rem]">
            <Button variant="black">
              <Mail></Mail>
            </Button>
            <Button variant="black">
              <Github></Github>
            </Button>
            <Button variant="black">
              <Linkedin></Linkedin>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[2.7rem] mb-[10.7rem]">
          <Text>
            Shoot me email to chat about my work or just like to say hey 👋
          </Text>
          <Text _className="flex items-center gap-[1rem]">
            <span>Back to top </span>
            <ArrowUp></ArrowUp>
          </Text>
        </div>
        <div className="flex justify-center">
          <Text _className="text-neutral-600">
            © Designed and coded by Nigar Safarova 💜
          </Text>
        </div>
      </div>
    </section>
  );
}
