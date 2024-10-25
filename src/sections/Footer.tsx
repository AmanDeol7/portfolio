import ArrowUpRight from "../assets/icons/arrow-up-right.svg"

const footerLink = [ 
  {
    title: 'Github' ,
    href: ''

  },
  {
    title: 'Linkedin' ,
    href: ''

  },
  {
    title: 'Instagram' ,
    href: ''

  },
  {
    title: 'Twitter' ,
    href: ''

  },
]

export const Footer = () => {
  return (<>
  <footer className="relative -z-10 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"> </div>
    <div className="container ">

      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">&copy; 2024. All rights reserved.</div>
        <div className="">
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((link, index) => {
              return (
                <div key={index} className="inline-flex items-align gap-1.5">
                  <a href={link.href}>
                    <span className="font-semibold ">{link.title}</span></a>
                    <ArrowUpRight className="size-5" />


                </div>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  </footer>
  
  
  </>);
};
