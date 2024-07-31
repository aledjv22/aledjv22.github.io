import { useState } from "react";

const Image = ({name , image}) => {
  return (
    <img src={image} alt={name} className='h-[300px] w-[350px] rounded-[35px]'/>
  );
}

const Info = ({name, description, repository, web}) => {
  return (
    <div className='flex flex-col items-center h-[300px] w-[350px] rounded-[35px] bg-blue-700 p-7 justify-between'>
        <h3 className='text-[25px] font-bold mt-1 mb-1 underline underline-offset-4'>
          {name}
        </h3>
        <p className='text-[16px] mb-3'>
          {description}
        </p>
        <div className='flex flex-row w-full justify-evenly'>
          <a href={repository} target='_blank' className='bg-black flex flex-col items-center p-1 rounded-2xl hover:bg-gray-600 w-[62.34px]'>
              <img src='https://res.cloudinary.com/takeoutcode-app/image/upload/v1677779261/portfolio/logos/github-logo-light_brzylu.svg' 
              alt='GitHub-icon' className='h-[40px] w-[40px] mb-1 ml-[2px]' />
              GitHub
          </a>
          <a href={web} target='_blank' className='bg-black flex flex-col items-center p-1 rounded-2xl hover:bg-gray-600 w-[62.34px]'>
              <img src='https://static.od-cdn.com/globe-icon-outline.svg' 
              alt='Web-icon' className='h-[40px] w-[40px] mb-1' />
              Web
          </a>
        </div>
      </div>
  );
}

const Project = ({name, image, description, repository, web}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='text-white font-text w-[350px]' key={name} onMouseEnter={()=>(setIsHovered(true))} onMouseLeave={()=>(setIsHovered(false))}>
      {
        isHovered ? 
        <Info name={name} description={description} repository={repository} web={web} />
        :
        <Image name={name} image={image}/>
      }
    </div>
  );
}

export default Project;