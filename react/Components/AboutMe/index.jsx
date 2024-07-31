const translations = {
  English: {
    aboutMe: 'About me',
    description: 'I am a web developer specialized in Frontend. I have always been passionate about all things computer and website building, which is why I pursue them as a career. I have more than a year of experience in web development. I am competent to work effectively in a team.'
  },
  Español: {
    aboutMe: 'Sobre mí',
    description: 'Soy un desarrollador web especializado en Frontend. Siempre me han apasionado todas las cosas relacionadas con los ordenadores y la construcción de sitios web, por eso lo persigo como carrera. Tengo más de un año de experiencia en desarrollo web. Soy competente para trabajar eficazmente en equipo.'
  }
}

const AboutMe = ({ language }) => {
  return (
    <>
    <h2 className='flex justify-center text-white text-[30px] font-text font-bold mb-5' id='about-me-section'>
      {translations[language].aboutMe}
    </h2>
    <div className='flex flex-row max-md:flex-col justify-evenly items-center md:gap-[25px] pl-2 pr-2'>
      <img src="https://i.ibb.co/Bw5GDbS/Foto.jpg" alt='profile' 
      className='sm:w-[362px] sm:h-[450px] w-[200px] h-[250px] sm:rounded-[40px]'/>  
      <div>
        <p className='text-white text-[19px] font-text max-w-[680px] px-2 pt-1'>
        {translations[language].description}
        </p>
        <ul className='flex flex-row justify-evenly mt-[30px]'>
          <li>
            <a href='https://www.linkedin.com/in/aledjv/' target='_blank'>
              <img src='https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779233/portfolio/logos/linkedin-logo_kwowwe.svg' 
              className='h-[40px] w-[40px]' alt='LinkedIn-icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/aledjv22' target='_blank'>
              <img src='https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779261/portfolio/logos/github-logo-light_brzylu.svg' 
              alt='GitHub-icon' className='h-[40px] w-[40px]' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/v_alediaz_' target='_blank'>
              <img src='https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779234/portfolio/logos/twitter-logo_b6codf.svg' 
              alt='Twitter-icon' className='h-[40px] w-[40px]' />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default AboutMe;