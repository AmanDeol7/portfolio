import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import Check from "../assets/icons/check-circle.svg";
import ArrowUp from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="container lg:pt-28">
      <SectionHeader
        title="Projects"
        eyebrow="Selected Work"
        description="Here are a few projects I've worked on recently. "
      />

      <div className=" flex flex-col mt-10 md:mt-20 lg:px-10 ">
        {portfolioProjects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="bg-gray-800 rounded-3xl relative mb-[5rem] z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:px-10 md:pt-10  after:pointer-events-none sticky top-16 "
            style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
          >
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <div className="lg:grid lg:grid-cols-2 gap-5 ">
              <div className=" ">
                <div className="flex ">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text uppercase font-bold tracking-widest inline-flex gap-2">
                    {/* <span className="ml-4 text-[1rem]">&bull;</span> */}
                    <span className="ml-2 ">{project.year}</span>
                  </div>
                </div>
                <h3 className="font-serif text-[1.4rem] ml-2 tracking-wider mt-2 md:text-3xl md:mt-4 lg:text-4xl ">
                  {project.title}
                </h3>
                <hr className="border-t-2 ml-2 border-white/10 mt-3 md:mt-5 mr-2" />
                <ul className="flex flex-col mt-2  ">
                  {project.results.map((result, resultIndex) => (
                    <li
                      key={resultIndex}
                      className="flex gap-2 text-white/50 mt-3 md:mt-5 text-sm"
                    >
                      <span>
                        <Check className="size-5 md:size-7" />
                      </span>
                      <span className="text-sm md:text-lg  ">
                        {result.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href={project.link}>
                  <button className=" flex my-8 justify-center items-center gap-2 bg-white text-gray-950 font-bold rounded-xl px-8 py-3 w-full md:w-[13rem] md:text-lg">
                    <p>Visit Live Site </p>
                    <span>
                      <ArrowUp className="size-4" />
                    </span>
                  </button>
                </a>
              </div>

              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-auto "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
