import Project from '../Project';
import todoInReact from '../../Images/todoInReact.jpg';
import onlineStore from '../../Images/onlineStore.jpg';
import basicCalculator from '../../Images/basicCalculator.jpg';
import discounts from '../../Images/discounts.jpg';

const Projects = () => {
  let projects = [
    {name: 'To-do in react ', description: 'The project is based on a list of tasks that allows the user to have a better management of their tasks knowing their status.', image: todoInReact, repository: 'https://github.com/aledjv22/todo_in_react', web: 'https://aledjv22.github.io/todo_in_react/'},

    {name: 'Online store', description: 'Online store project using React.js, Vite.js and TailwindCSS.', image: onlineStore, repository: 'https://github.com/aledjv22/online-store', web:'https://aledjv22.github.io/online-store/'},

    {name: 'Basic calculator', description: 'Project of a basic calculator.', image: basicCalculator, repository: 'https://github.com/aledjv22/basic-calculator', web: 'https://aledjv22.github.io/basic-calculator/'},

    {name: 'Discounts', description: 'Project a discount calculator and discount coupons.', image: discounts, repository: 'https://github.com/aledjv22/discounts', web: 'https://aledjv22.github.io/discounts/'},
  ];

  return (
    <div className='text-white font-text pt-[60px] pb-[20px]'>
      <h2 className='flex justify-center text-[30px] font-bold mb-5'>
        Projects
      </h2>
      <figure className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 w-full min-h-[150px]'>
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