import StarIcon from "../assets/icons/star.svg"
import { PropsWithChildren } from "react"
export const HeroOrbit = ({children, size, rotate}: PropsWithChildren<{size:number; rotate:number}>) => {

    return (<>
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  " >
      <div className="  " style={{height: `${size}px`, width: `${size}px`,transform: `rotate(${rotate}deg)` } }>
        <div className=" inline-flex " style={{transform: `rotate(${rotate*-1}deg)`}}>
      {/* <StarIcon className="size-28 text-emerald-300" /> */}
      {children}
      </div>
      </div>
    </div>
    </>)
}