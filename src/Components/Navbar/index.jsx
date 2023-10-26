import scroll from "../../Scripts/scroll";

const Navbar = () => {
  return (
    <nav className='bg-[#202020] shadow-lg shadow-[#202020]/50 h-[40px] mr-2 ml-2 font-navbar max-sm:hidden'>
      <ul className='flex justify-evenly text-[18px] pt-2 text-white underline-offset-4'>
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