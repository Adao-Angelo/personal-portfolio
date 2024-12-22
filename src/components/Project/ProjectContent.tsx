interface ProjectContentProps {
  title: string;
  description: string;
}

export default function ProjectContent({
  title,
  description,
}: ProjectContentProps) {
  return (
    <div className="flex flex-col px-[1.6rem]">
      <h2 className="text-[2rem] font-sora font-bold">{title}</h2>
      <p className="text-[1.6rem]  text-neutral-600 dark:text-neutral-200">
        {description}
      </p>
    </div>
  );
}
