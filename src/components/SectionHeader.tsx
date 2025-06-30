interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-[8rem] ${className} text-center`}>
      <h2 className="font-inconsolata text-subtitle text-red mb-[1.6rem]">
        {subtitle}
      </h2>
      <h1 className="font-asap text-title-md text-gray-100">{title}</h1>
    </div>
  );
}
