const ProjectImg = ({name, image}) => {

  return (
    <article className='flex flex-col items-center text-white font-text' key={name}>
      <img src={image} alt={name} className='h-[300px] w-[350px] rounded-[35px]'/>
    </article>
  );
}

export default ProjectImg;