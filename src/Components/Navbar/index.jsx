import { useState, useEffect } from 'react';
import scroll from "../../Scripts/scroll";
import FlagEnglish from '../../Images/flagEnglish.svg';
import FlagSpanish from '../../Images/flagSpanish.svg';

const translations = {
  English: {
    aboutMe: 'About me',
    skills: 'Technical Skills',
    projects: 'Projects',
    education: 'Education',
    menu: 'Menu',
    close: 'Close'
  },
  Español: {
    aboutMe: 'Sobre mí',
    skills: 'Habilidades Técnicas',
    projects: 'Proyectos',
    education: 'Educación',
    menu: 'Menú',
    close: 'Cerrar'
  }
}

const Navbar = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'English' ? 'Español' : 'English'));
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return (
    <nav className='bg-[#202020] shadow-lg shadow-[#202020]/50 h-[40px] px-2 font-navbar w-full text-lg'>
      <div className="flex justify-between items-center h-full">
        <ul className={`flex justify-evenly text-white underline-offset-4 md:pt-0
        ${menuOpen ? 'flex flex-col' : ''}
        ${!menuOpen && isMobile ? 'hidden' : ''}
        ${isMobile ? "bg-[#202020] absolute top-8 pl-3 text-lg w-full left-0" :
        "w-full flex flex-row justify-evenly content-evenly"}`}>
          <li className={`${isMobile ? "py-5" : ""}`}>
            <a className='hover:underline' id='about-me' 
            onClick={() => {
              scroll('about-me');
              setMenuOpen(false);
            }}>
              {translations[language].aboutMe}
            </a>
          </li>
          <li className={`${isMobile ? "py-5" : ""}`}>
            <a className='hover:underline' id='skills' 
            onClick={() => {
              scroll('skills');
              setMenuOpen(false);
            }}>
              {translations[language].skills}
            </a>
          </li>
          <li className={`${isMobile ? "py-5" : ""}`}>
            <a className='hover:underline' id='projects' 
            onClick={() => {
              scroll('projects');
              setMenuOpen(false);
            }}>
              {translations[language].projects}
            </a>
          </li>
          <li className={`${isMobile ? "py-5" : ""}`}>
            <a className='hover:underline' id='education' 
            onClick={() => {
              scroll('education');
              setMenuOpen(false);
            }}>
              {translations[language].education}
            </a>
          </li>
          {!isMobile &&(
          <li className={`${isMobile ? "py-5" : ""}`}>
            <button className='h-full flex items-center'
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }} >
              {language}
              <img
                src={language === 'English' ? FlagEnglish : FlagSpanish}
                alt='Flag'
                className='w-[20px] h-[20px] ml-2 inline'
              />
          </button>
          </li>
          )}
        </ul>

        <button className="md:hidden text-white font-medium text-xl" onClick={toggleMenu}>
        {menuOpen ? translations[language].close : translations[language].menu}
        </button>

        {isMobile && (
          <button className='h-full flex items-center text-white font-navbar' onClick={toggleLanguage}>
            {language}
            <img
              src={language === 'English' ? FlagEnglish : FlagSpanish}
              alt='Flag'
              className='w-[20px] h-[20px] ml-2 inline'
            />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
