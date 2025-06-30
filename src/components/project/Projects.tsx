import Project from "./";

const projects = [
  {
    title: "AI Health Assistant",
    description:
      "An application that uses AI to predict symptoms and provide personalized health recommendations.",
    image: "/Thumbnail.png",
  },
  {
    title: "Eco Delivery",
    description:
      "A delivery service focused on sustainability and the use of electric vehicles.",
    image: "/Thumbnail.png",
  },
  {
    title: "Lumina UI Kit",
    description:
      "A complete UI component kit for modern and accessible web applications.",
    image: "/Thumbnail.png",
  },
  {
    title: "Smart Home App",
    description:
      "A smart control app to manage your home devices through your phone.",
    image: "/Thumbnail.png",
  },
  {
    title: "EduTrack",
    description:
      "An education tracking platform focused on data and student progress.",
    image: "/Thumbnail.png",
  },
  {
    title: "Finance App",
    description:
      "A personal finance management app with charts, alerts, and goal tracking.",
    image: "/Thumbnail.png",
  },
];

export default function Projects() {
  return (
    <section className="max-w-[100rem] m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.4rem]">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
