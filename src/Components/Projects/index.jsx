import Project from '../Project';
import huellitas from '../../Images/homeHuellitas.png';
import onlineStore from '../../Images/onlineStore.jpg';

const translations = {
  English: {
    title: 'Projects',
    projects: [
      {
        name: 'Huellitas', 
        description: 'The project aims to promote pet adoption. Built with React.js, TailwindCSS, and Vite.js.'
      },
      {
        name: 'Online store', 
        description: 'Online store project using React.js, Vite.js and TailwindCSS.'
      }
    ]
  },
  Español: {
    title: 'Proyectos',
    projects: [
      {
        name: 'Huellitas', 
        description: 'El proyecto tiene como objetivo promover la adopción de mascotas. Construido con React.js, TailwindCSS y Vite.js.'
      },
      {
        name: 'Tienda en línea', 
        description: 'Proyecto de tienda en línea utilizando React.js, Vite.js y TailwindCSS.'
      }
    ]
  }
}

const Projects = ({ language }) => {
  let projects = [
    {
      image: huellitas, 
      repository: 'https://github.com/aledjv22/huellitas', 
      web: 'https://www.huellitas.live/'
    },
    {
      image: onlineStore, 
      repository: 'https://github.com/aledjv22/online-store', 
      web:'https://aledjv22.github.io/online-store/'
    },
  ];

  return (
    <div className='text-white font-text pt-[40px]'>
      <h2 className='flex justify-center text-[30px] font-bold mb-2' id='projects-section'>
        {translations[language].title}
      </h2>
      <figure className='grid  md:grid-cols-2 grid-cols-1 gap-5 w-full min-h-[150px]'>
        {
          projects.map((project, index) => (
            <article className='flex justify-center items-center' key={translations[language].projects[index].name}>
              <Project 
                name={translations[language].projects[index].name} 
                image={project.image} 
                description={translations[language].projects[index].description} 
                repository={project.repository} 
                web={project.web} 
                key={translations[language].projects[index].name}
              />
            </article>
          ))
        }
      </figure>
    </div>
  );
}

export default Projects;