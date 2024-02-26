const translations = {
  English: {
    greeting: "Hi! I'm Victor Díaz",
    job: "Frontend Developer"
  },
  Español: {
    greeting: "¡Hola! Soy Victor Díaz",
    job: "Desarrollador Frontend"
  }
}

const Presentation = ({ language }) => {
  return (
    <section 
    className='flex items-center justify-center w-full text-white mb-[10px]'>
      <h1 className='font-presentation text-[50px] md:text-[100px]'>
        {translations[language].greeting} <br/>{translations[language].job}
      </h1>
    </section>
  );
}

export default Presentation;