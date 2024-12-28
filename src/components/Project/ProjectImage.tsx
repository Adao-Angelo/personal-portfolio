interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="w-full h-[30.9rem] bg-gray-300 flex items-center justify-center overflow-hidden">
      <img src={src} alt={alt} className="min-w-full min-h-full object-cover" />
    </div>
  );
}
