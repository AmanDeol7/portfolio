import  memoji from "../assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg"
import grainImage from "../assets/images/grain.jpg"

export const HeroSection = () => {


  return (
  <div className="py-32 md:py-48 lg:py-64 relative z-0">
    <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
    <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5" ></div>
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
