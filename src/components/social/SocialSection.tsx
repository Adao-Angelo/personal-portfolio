import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import SocialCard from "./SocialCard";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seu-usuario",
    icon: <LinkedinLogoIcon className="w-full h-full" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/seu-usuario",
    icon: <InstagramLogoIcon className="w-full h-full" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/seu-usuario",
    icon: <GithubLogoIcon className="w-full h-full" />,
  },
  {
    label: "Email",
    href: "mailto:seuemail@exemplo.com",
    icon: <EnvelopeSimpleIcon className="w-full h-full" />,
  },
];

export default function SocialSection() {
  return (
    <div className="max-w-[40rem] m-auto space-y-4">
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
