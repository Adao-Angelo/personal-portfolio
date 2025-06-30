import type { ElementType, ReactNode } from "react";

interface BadgeProps {
  icon: ElementType;
  iconColor: string;
  children: ReactNode;
}

export default function Badge({ icon: Icon, iconColor, children }: BadgeProps) {
  return (
    <div className="flex items-center gap-[0.8rem] text-center bg-gray-400 text-gray-300 py-[0.9rem] px-[1.6rem] rounded-full">
      <Icon className={`${iconColor}`} size={24} />
      <p className="font-maven text-text-md">{children}</p>
    </div>
  );
}
