import { twMerge } from "tailwind-merge";
import StarIcon from "../assets/icons/star.svg"
import { PropsWithChildren } from "react"
export const HeroOrbit = ({children, size, rotate, orbitDuration, shouldOrbit = false , shouldSpin = false, spinDuration}: PropsWithChildren<{size:number; rotate:number; orbitDuration?:number;shouldOrbit?:boolean; shouldSpin?:boolean; spinDuration?:number}>) => {

    return (<>
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  " >
     <div className={twMerge(shouldOrbit === true && "animate-spin ")} style={{animationDuration:`${orbitDuration}s`}}>
      <div className=" flex items-start justify-start " style={{height:`${size}px`, width:`${size}px`,transform:`rotate(${rotate}deg)` } }>
          <div className={twMerge(shouldSpin === true && "animate-spin")} style={{animationDuration:`${spinDuration}s`}}>
        <div className=" inline-flex " style={{transform: `rotate(${rotate*-1}deg)`}}>
      {/* <StarIcon className="size-28 text-emerald-300" /> */}
      {children}
      </div>
      </div>
      </div>
      </div> 
    </div>
    </>)
}