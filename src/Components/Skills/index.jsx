const Skills = ({ language }) => {
  let skills = [
    { name: 'React.JS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779924/portfolio/logos/react-logo_kfztxc.svg' },
    { name: 'Vite', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png'},
    { name: 'TailwindCSS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779230/portfolio/logos/tailwindcss-logo_kywpbm.svg' },
    { name: 'Node JS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779924/portfolio/logos/node-logo_cbvcrx.svg' },
    { name: 'PostgreSQL', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677780295/portfolio/logos/postgresql-logo_xarsii.svg'},
    { name: 'Git', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779234/portfolio/logos/git-logo_fhege3.svg'},
    { name: 'HTML', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677780350/portfolio/logos/html-logo_ma2f9z.svg' },
    { name: 'CSS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677780308/portfolio/logos/css-logo_wrehg2.svg'},
    { name: 'JavaScript', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677781099/portfolio/logos/javascript-logo_zltq85.svg'}
  ];

  const translations = {
    English: 'Technical Skills',
    Español: 'Habilidades Técnicas'
  }

  return (
    <div className='text-white font-text pt-[40px]'>
      <h2 className='flex justify-center text-[30px] font-bold mb-2' id='skills-section'>
        {translations[language]}
      </h2>
      <figure className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 w-full min-h-[150px] justify-evenly'>
        {
          skills.map(skill => (
            <article className='flex flex-col items-center' key={skill.name}>
              <img src={skill.icon} alt={skill.name} className='h-[70px] w-[70px]'/>
              <figcaption>{skill.name}</figcaption>
            </article>
          ))
        }
      </figure>
    </div>
  );
}

export default Skills;