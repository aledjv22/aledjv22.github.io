import { useState } from 'react';
import scroll from "../../Scripts/scroll";
import FlagEnglish from '../../Images/flagEnglish.svg';
import FlagSpanish from '../../Images/flagSpanish.svg';

const translations = {
  English: {
    aboutMe: 'About me',
    skills: 'Technical Skills',
    projects: 'Projects',
    education: 'Education'
  },
  Español: {
    aboutMe: 'Sobre mí',
    skills: 'Habilidades Técnicas',
    projects: 'Proyectos',
    education: 'Educación'
  }
}

const Navbar = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'English' ? 'Español' : 'English');
  }

  return (
    <nav className='bg-[#202020] shadow-lg shadow-[#202020]/50 h-[40px] mr-2 ml-2 font-navbar max-sm:hidden'>
      <ul className='flex justify-evenly text-[18px] pt-2 text-white underline-offset-4'>
        <li>
          <a className='hover:underline' id='about-me' onClick={() => scroll('about-me')}>
            {translations[language].aboutMe}
          </a>
        </li>
        <li>
          <a className='hover:underline' id='skills' onClick={() => scroll('skills')}>
            {translations[language].skills}
          </a>
        </li>
        <li>
          <a className='hover:underline' id='projects' onClick={() => scroll('projects')}>
            {translations[language].projects}
          </a>
        </li>
        <li>
          <a className='hover:underline' id='education' onClick={() => scroll('education')}>
            {translations[language].education}
          </a>
        </li>
        <li>
          <button onClick={toggleLanguage}>
            {language}
            <img src={language === 'English' ? FlagEnglish : FlagSpanish } 
            alt='Flag' className='w-[20px] h-[20px] ml-2 inline'/>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;