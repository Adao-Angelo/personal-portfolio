import Button from "@/components/ui/Button";

export default function About() {
  return (
    <div className="flex flex-col gap-[2.9rem] mt-[7rem] mb-[6rem]">
      <h2 className="font-bold font-sora text-[2.8rem]">Hi there!</h2>
      <p className="text-[1.6rem]">
        I am a passionate and driven full-stack developer with an unwavering
        love for technology. I thrive in challenging environments that push me
        beyond my comfort zone, enabling continuous learning and personal
        growth. My dedication to creating impactful digital solutions is matched
        by a commitment to refining my skills every day, turning ideas into
        meaningful and user-centered experiences.
      </p>
      <p className="text-[1.6rem]">
        I believe that every challenge is an opportunity to become better and
        that technology is a powerful tool to bring about positive change.
        Let&#39;s create something amazing together!
      </p>
      <div>
        <Button>READ MORE</Button>
      </div>
      <div className="">
        <img className="rounded-[0.5rem]" src="/dev.jpeg" alt="dev" />
      </div>
    </div>
  );
}
