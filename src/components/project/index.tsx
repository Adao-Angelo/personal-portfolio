import Image from "next/image";

interface projectProps {
  image: string;
  title: string;
  description: string;
}
export default function Project({ image, title, description }: projectProps) {
  return (
    <div className="rounded-[1.2rem] bg-gray-400 p-[1.2rem] text-left">
      <div>
        <Image
          className="w-full h-[15rem] rounded-[1.2rem] object-cover"
          src={image}
          alt={title}
          width={300}
          height={150}
        ></Image>
      </div>
      <div className="mt-[2rem]">
        <h2 className="text-title-sm font-asap text-gray-100 mb-[0.8rem]">
          {title}
        </h2>

        <p className="text-text-sm text-gray-200 font-maven">{description}</p>
      </div>
    </div>
  );
}
