import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg"

export const ContactSection = () => {
  return (
    
    <div className="py-16">
     
      <div className="container lg:px-14">
     
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl p-8 md:p-8 text-gray-950 relative z-0">

        <div className="absolute inset-0  opacity-5 -z-10" style={{backgroundImage: `url(${grainImage.src})`}}></div>
          
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div>
              <h2 className="font-serif text-bold text-2xl text-center md:text-3xl lg:text-4xl md:text-start">Let's Create something amazing together</h2>
              <p className="mt-3 text-gray-950 font-medium text-center md:text-lg md:text-start">
                Ready to bring your next project to life? Lets connect and I can help you achieve your goals.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="rounded-xl bg-gray-950 py-4 px-6">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold md:text-xl lg:text-xl whitespace-nowrap">Contact me</span>
                  <ArrowUpRightIcon className="text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
