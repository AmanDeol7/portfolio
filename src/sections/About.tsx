import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

import StarIcon from "../assets/icons/star.svg";
import Book from "../assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CSSIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import GithubIcon from "../assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "../assets/images/map.png";
import Memoji from "../assets/images/memoji-smile.png";
import { ToolBoxItems } from "@/components/ToolBoxItem";
const items = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },

];


const hobbies = [
 
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%"
  },
  {
    title: "Bowling",
    emoji: "🎳",
    left: "45%",
    top: "40%"
  },
  {
    title: "8 Ball",
    emoji: "🎱",
    left: "65%",
    top: "55%"
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%"
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "45%",
    top: "70%"
  },
  {
    title: "Reading",
    emoji: "📕",
    left: "5%",
    top: "5%"
  },
];

export const AboutSection = () => {
  return (
    <>
      <div className="container lg:py-28 lg:px-14">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse into my World"
          description="Learn more about who I am, what I do and What Inspires Me."
        />
        <div className="mt-20">
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              <div className=" inline-flex  items-center gap-4">
                <StarIcon className="size-8 text-emerald-300" />
                <h2 className="font-serif text-3xl"> My Reads</h2>
              </div>
              <p className="text-sm lg:text-base text-white/60 mt-2">
                Explore the books shaping my perspectives
              </p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={Book} alt="bookk" />
            </div>
          </Card>
          
          <Card className=" h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <div className="flex flex-col px-6 pt-6 ">
              <div className="  inline-flex items-center gap-4">
                <StarIcon className="size-8 text-emerald-300" />
                <h2 className="font-serif text-3xl"> My toolbox</h2>
              </div>

              <p className="text-sm lg:text-base text-white/60 mt-2">
                Explore the technologies and the tools I use to craft
                Exceptional Digital experiences
              </p>
              <ToolBoxItems items={items} className="mt-6"/>
              <ToolBoxItems items={items} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>

            </div>
          </Card>
          </div>
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3" >
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <div className="flex-flex-col px-6 py-6">
              <div className=" inline-flex  items-center gap-4">
                <StarIcon className="size-8 text-emerald-300" />
                <h2 className="font-serif text-3xl"> Beyond the Code</h2>
              </div>
              <p className="text-sm lg:text-base text-white/60 mt-2">
                Explore my Interests and Hobbies beyond the digital realm.
              </p>
            </div>
            <div className="relative flex-1">
              {hobbies.map((hobby, index) => {
                return (
                  <div key={index} className="inline-flex items-center gap-2 px-5 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute" style={{left: hobby.left, top:hobby.top}}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                );
              })}
            </div>
          </Card>
          <Card  className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map"  className="h-full w-full object-cover"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30  ">
            <Image src={Memoji} alt="memoji" className="size-20" />
            </div>  
          </Card>
          </div>
        </div>
      </div>
    </>
  );
};
