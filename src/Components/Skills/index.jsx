const Skills = () => {
  let skills = [
    { name: 'React.JS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779924/portfolio/logos/react-logo_kfztxc.svg' },
    { name: 'Vite', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png'},
    { name: 'TailwindCSS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779230/portfolio/logos/tailwindcss-logo_kywpbm.svg' },
    { name: 'Node JS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779924/portfolio/logos/node-logo_cbvcrx.svg' },
    { name: 'HTML', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677780350/portfolio/logos/html-logo_ma2f9z.svg' },
    { name: 'CSS', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677780308/portfolio/logos/css-logo_wrehg2.svg'},
    { name: 'JavaScript', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677781099/portfolio/logos/javascript-logo_zltq85.svg'},
    { name: 'Git', icon: 'https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779234/portfolio/logos/git-logo_fhege3.svg'}
  ];

  return (
    <div className='text-white font-text pt-[60px] pb-[20px]'>
      <h2 className='flex justify-center text-[30px] font-bold mb-5' id='skills-section'>
        Technical Skills
      </h2>
      <figure className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 gap-5 w-full min-h-[150px] justify-evenly'>
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