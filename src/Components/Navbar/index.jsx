import scroll from "../../Scripts/scroll";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#202020] shadow-lg shadow-[#202020]/50 h-[60px] mr-2 ml-2 font-navbar text-[18px]'>
      <div>
        <a href='/' className='text-white'>Home</a>
      </div>
      <ul className='flex gap-3 text-white underline-offset-4'>
        <li>
          <a className='hover:underline' id='about-me' onClick={() => scroll('about-me')}>
            About me
          </a>
        </li>
        <li>
          <a className='hover:underline' id='skills' onClick={() => scroll('skills')}>
            Technical Skills
          </a>
        </li>
        <li>
          <a className='hover:underline' id='projects' onClick={() => scroll('projects')}>
            Projects
          </a>
        </li>
        <li>
          <a className='hover:underline' id='education' onClick={() => scroll('education')}>
            Education
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;