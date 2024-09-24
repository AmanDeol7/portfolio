export const Header = () => {
  return (
  <div className="flex justify-center items-center fixed  top-3 w-full">
    <nav className="flex gap-1 p-0.5  rounded-full border-white/15 border-[2px] bg-white/10 backdrop-blur">
      <a href="#" className="nav-items" >Home</a>
      <a href="#" className="nav-items">Projects</a>
      <a href="#" className="nav-items">About</a>
      <a href="#" className="nav-items bg-white text-gray-900 hover:bg-white/70 hover:text-black/90">Contact</a>


    </nav>
  </div>);
};
