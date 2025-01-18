import Technologies from "@/components/Technologies/Technologies";

export default function About() {
  return (
    <div className="flex flex-col gap-[2.9rem] mt-[7rem] mb-[6rem]">
      <h1 className="font-bold font-sora text-[3.2rem] text-center md:mb-[2rem]">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row-reverse gap-[2.9rem] md:gap-[5rem] md:mb-[17rem]">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-[2.9rem] md:w-[54.2rem]"
        >
          <h2 className="font-bold font-sora text-[2rem]">Quote...</h2>
          <p className="text-[1.6rem]">
            I believe technology, when combined with passion and persistence,
            has the power to create a better world.
          </p>

          <p className="text-[1.6rem]">
            I am a passionate and driven full-stack developer with an unwavering
            love for technology. I thrive in challenging environments that push
            me beyond my comfort zone, enabling continuous learning and personal
            growth. My dedication to creating impactful digital solutions is
            matched by a commitment to refining my skills every day, turning
            ideas into meaningful and user-centered experiences.
          </p>

          <p className="text-[1.6rem]">
            I believe that every challenge is an opportunity to become better
            and that technology is a powerful tool to bring about positive
            change. Let&#39;s create something amazing together!
          </p>
        </div>

        <div className="md:max-w-[36.9rem] lg:max-w-[55rem]  ">
          <img
            className="rounded-[0.5rem] md:h-full object-cover"
            src="/dev.jpeg"
            alt="Developer Portrait"
          />
        </div>
      </div>

      <div className="lg:px-[10.3rem]">
        <h2 className="font-bold font-sora text-[2rem] text-center mb-[2rem]">
          Skills
        </h2>
        <p className="text-[1.6rem] mb-[2rem] m-auto text-center">
          Throughout these years, I have worked immensely to build this arsenal
          of technologies.
        </p>
        <Technologies></Technologies>

        <div className="flex flex-col md:gap-[4.2rem] gap-[2.2rem] mt-[4rem]">
          <h2 className="font-bold font-sora text-[2rem] text-center">
            Interests
          </h2>
          <p data-aos="fade-up" className="text-[1.6rem]">
            I am passionate about leveraging technology to solve real-world
            problems and constantly seek ways to improve my skills. My main
            interests include building intuitive user interfaces with modern
            frameworks like React and Next.js, as well as exploring the
            potential of AI in enhancing human experiences.
          </p>
          <p data-aos="fade-up" className="text-[1.6rem]">
            I believe that technology is a powerful tool to empower people and
            bring about positive change. I enjoy helping others by simplifying
            complex technical concepts and creating solutions that make their
            lives easier.
          </p>
          <p data-aos="fade-up" className="text-[1.6rem]">
            Beyond development, I enjoy participating in hackathons,
            contributing to open-source projects, and staying updated with the
            latest advancements in software engineering.
          </p>
        </div>
      </div>
    </div>
  );
}
