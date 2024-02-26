import Project from '../Project';
import huellitas from '../../Images/homeHuellitas.png';
import onlineStore from '../../Images/onlineStore.jpg';

const Projects = () => {
  let projects = [
    {
      name: 'Huellitas', 
      description: 'The project aims to promote pet adoption.', 
      image: huellitas, 
      repository: 'https://github.com/aledjv22/huellitas', 
      web: 'https://www.huellitas.live/'
    },
    {
      name: 'Online store', 
      description: 'Online store project using React.js, Vite.js and TailwindCSS.', 
      image: onlineStore, 
      repository: 'https://github.com/aledjv22/online-store', 
      web:'https://aledjv22.github.io/online-store/'
    },
  ];

  return (
    <div className='text-white font-text pt-[40px]'>
      <h2 className='flex justify-center text-[30px] font-bold mb-2' id='projects-section'>
        Projects
      </h2>
      <figure className='grid  md:grid-cols-2 grid-cols-1 gap-5 w-full min-h-[150px]'>
        {
          projects.map(project => (
            <article className='flex justify-center items-center' key={project.name}>
              <Project name={project.name} image={project.image} description={project.description} repository={project.repository} web={project.web} key={project.name}/>
            </article>
          ))
        }
      </figure>
    </div>
  );
}

export default Projects;