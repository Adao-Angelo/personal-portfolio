import { ArrowUpRightIcon } from "@phosphor-icons/react";
import React from "react";

interface SocialCardProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export default function SocialCard({ icon, label, href }: SocialCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-gray-400 rounded-[1.2rem] p-[2rem] flex justify-between items-center hover:bg-gray-500 transition">
        <div className="flex gap-[1.2rem] items-center">
          <span className="h-[2.3rem] w-[2.8rem] text-gray-200">{icon}</span>
          <p className="font-maven font-medium text-text-sm text-gray-300 leading-relaxed">
            {label}
          </p>
        </div>
        <ArrowUpRightIcon className="h-[2em] w-[2rem] text-blue" />
      </div>
    </a>
  );
}
