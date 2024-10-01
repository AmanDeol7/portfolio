import  memoji from "../assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg"
import grainImage from "../assets/images/grain.jpg"
import { HeroOrbit } from "@/components/HeroOrbit";
import Sparkle from "../assets/icons/sparkle.svg"
import StarIcon from "../assets/icons/star.svg"
import Circle from  "../assets/icons/check-circle.svg"

export const HeroSection = () => {


  return (
  <div className="py-32 md:py-48 lg:py-64 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">


    <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
    <div className="size-[620px] hero-ring" ></div>
    <div className="size-[820px] hero-ring" ></div>
    <div className="size-[1020px] hero-ring" ></div>
    <div className="size-[1220px] hero-ring" ></div>
    <HeroOrbit size={800} rotate={-60} >
    <StarIcon className="size-28 text-emerald-300"/>
    </HeroOrbit> 
    <HeroOrbit size={550} rotate={20} >
    <StarIcon className="size-14 text-emerald-200/90"/>
    </HeroOrbit> 
    <HeroOrbit size={600} rotate={100} >
    <StarIcon className="size-10 text-emerald-200/90"/>
    </HeroOrbit>
    <HeroOrbit size={720} rotate={140} >
    <Sparkle className="size-14 text-emerald-200/30"/>
    </HeroOrbit>
    <HeroOrbit size={550} rotate={180} >
    <Sparkle className="size-10 text-emerald-200/30"/>
    </HeroOrbit>
    <HeroOrbit size={430} rotate={-20} >
    <Sparkle className="size-9 text-emerald-200/20"/>
    </HeroOrbit>
    <HeroOrbit size={440} rotate={80} >
    <Sparkle className="size-5 text-emerald-200/20"/>
    </HeroOrbit>
    <HeroOrbit size={650} rotate={-10} >
    <div className="size-2.5 bg-emerald-300/20 rounded-full"></div>
    </HeroOrbit>
    <HeroOrbit size={520} rotate={-40} >
    <div className="size-2 bg-emerald-300/20 rounded-full"></div>
    </HeroOrbit>
    <HeroOrbit size={720} rotate={85} >
    <div className="size-3 bg-emerald-300/20 rounded-full"></div>
    </HeroOrbit>
    </div>
    

    
   
  <div className="container">
    <div className="flex flex-col items-center justify-center">
          <Image src={memoji} alt="memoji" className="size-[100px]" />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-md gap-4">
           <div className="bg-green-500 size-2.5 rounded-full"></div>
           <div className="text-sm font-medium font-sans text-white/90"> Available for Internships</div>
          </div>
    </div>
   <div className="max-w-lg mx-auto">
    <h1 className="font-serif text-3xl text-center md:text-5xl mt-8 tracking-wide">Hi I am Aman.</h1>
    <p className="mt-4 text-center text-white/50 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, magnam. Aliquam sunt magni, aspernatur, esse a</p>
    </div>
    <div className="flex flex-col items-center mt-8 gap-4 w-[20] max-auto md:flex-row justify-center ">

      <button className=" flex justify-center items-center border border-white/20 rounded-lg px-4 h-12 gap-2   ">
        <span className="tracking-wide"> Explore My Work </span>
        <ArrowDown className="size-4" />
      </button>
      <button className=" inline-flex justify-center items-center border  border-white/20 rounded-xl px-4 h-12   bg-white text-gray-950 ">
        <span className="text-2xl">👋</span>  
        <span className="tracking-wide font-semibold"> Lets Connect </span>
        
      </button>
    </div>
     
    </div>

  </div>);
};
