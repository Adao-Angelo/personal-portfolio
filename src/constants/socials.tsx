import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export const socials = [
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
