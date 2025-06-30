import { Icon } from "@phosphor-icons/react";

interface ServiceCardProps {
  icon: Icon;
  title: string;
  description: string;
  iconColor: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  iconColor,
}: ServiceCardProps) {
  return (
    <div className="p-[2rem] rounded-[1.2rem] border border-gray-500">
      <Icon className={`w-[4.8rem] h-[4.8rem] ${iconColor}`} />
      <div className="mt-[2rem]">
        <h3 className="text-title-sm text-gray-100 mb-[0.8rem]">{title}</h3>
        <p className="text-text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}
