export const SectionHeader = ({title,eyebrow,description }: {
    title:string, eyebrow:string, description:string
}) => {
    return (
        <>
        
        <div className="flex justify-center">
      <p className="text-center uppercase tracking-widest font-semibold text-base bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent"> {title}</p>
      </div>
      <h2 className="font-serif text-3xl tracking-wider text-center mt-6 md:text-5xl ">{eyebrow}</h2>

      <p className="text-center text-white/60 tracking-wide mt-6 font-light lg:text-xl md:text-[1.1rem] max-w-lg mx-auto">{description}</p>
      
        </>
    )

}