const Education = ({ language }) => {
  const text = {
    English: {
      title: 'Education',
      description1: `I am currently studying a degree in Computer Science at the National University of Córdoba - FaMAF, where I have been able to acquire a vast and solid base of what programming is.
      In addition, the last year I have invested my time and energy in educating myself in web development, for this I have carried out online courses through the `,
      link: 'Platzi',
      linkUrl: 'https://platzi.com/',
      description2: ` platform. Thanks to these courses, I have acquired a lot of practical skills. I am excited to apply everything I have learned in these courses to my personal projects.`,
      description3: `I have also spent time improving my language skills and have taken several English courses at B1 level, which has allowed me to improve my ability to communicate in a global environment and broaden my perspective.`
    },
    Español: {
      title: 'Educación',
      description1: `Actualmente estoy estudiando una licenciatura en Ciencias de la Computación en la Universidad Nacional de Córdoba - FaMAF, donde he podido adquirir una base sólida y vasta de lo que es la programación.
      Además, el último año he invertido mi tiempo y energía en educarme en desarrollo web, para esto he realizado cursos online a través de la plataforma `,
      link: 'Platzi',
      linkUrl: 'https://platzi.com/',
      description2: `. Gracias a estos cursos, he adquirido muchas habilidades prácticas. Estoy emocionado de aplicar todo lo que he aprendido en estos cursos a mis proyectos personales.`,
      description3: `También he dedicado tiempo a mejorar mis habilidades lingüísticas y he tomado varios cursos de inglés a nivel B1, lo que me ha permitido mejorar mi capacidad para comunicarme en un entorno global y ampliar mi perspectiva.`
    }
  }

  return (
    <div className='text-white font-text pt-[40px]'>
      <h2 className='flex justify-center text-[30px] font-bold' id='education-section'>
        {text[language].title}
      </h2>
      <p className='w-full block justify-center px-6 pb-6 text-[18px]'>
        {text[language].description1}
        <a className='text-[#a3aed0] underline underline-offset-1' target="_blank" href={text[language].linkUrl}>
          {text[language].link}
        </a>
        {text[language].description2}
        <br/>
        {text[language].description3}
      </p>
    </div>
  );
}

export default Education;