const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#202020] shadow-lg shadow-[#202020]/50 h-[60px] mr-2 ml-2 font-navbar text-[18px]'>
      <div>
        <a href='/' className='text-white'>Home</a>
      </div>
      <ul className='flex gap-3 text-white underline-offset-4'>
        <li>
          <a href='/#about' className='hover:underline'>
            About me
          </a>
        </li>
        <li>
          <a href='/#skills' className='hover:underline'>
            Technical Skills
          </a>
        </li>
        <li>
          <a href='/#projects' className='hover:underline'>
            Projects
          </a>
        </li>
        <li>
          <a href='/#education' className='hover:underline'>
            Education
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;