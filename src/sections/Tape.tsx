import { Fragment } from "react";
import Star from "../assets/icons/star.svg"

const words = [
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Responsive",
  "Search Optimized",
  "Usable",
  "Reliable"
]


export const TapeSection = () => {
  return (
    <>
      <div className="py-6 lg:py-16 overflow-x-clip   ">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-2">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
        <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left" style={{animationDuration:'30s'}}>
          {[...new Array(3)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {words.map((word) => {
            return (
              
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 font-extrabold uppercase text-sm md:text-base">{word}</span>
                <div className=" animate-spin"  style={{animationDuration:'2s'}}>
                <Star className="size-6 text-gray-900 -rotate-12"  />
                </div>
                
              </div>
              
            )
          })}

            </Fragment>
          ))}
          
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
