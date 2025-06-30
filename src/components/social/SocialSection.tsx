import { socials } from "@/constants/socials";
import SocialCard from "./SocialCard";

export default function SocialSection() {
  return (
    <div className="max-w-[40rem] m-auto space-y-4 p-[1.8rem]">
      {socials.map((item) => (
        <SocialCard
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
