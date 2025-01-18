interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="w-full h-[30.9rem] p-[1.6rem]">
      <img
        src={src}
        alt={alt}
        className="min-w-full rounded-[0.4rem] h-full object-cover filter grayscale hover:grayscale-0 transition"
      />
    </div>
  );
}
