import { useState } from 'react';
import Navbar from '../../Components/Navbar'
import Presentation from '../../Components/Presentation'
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import Projects from '../../Components/Projects';
import Education from '../../Components/Education';

const App = () => {
  const [language, setLanguage] = useState('English');

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage}/>
      <Presentation language={language}/>
      <AboutMe language={language}/>
      <Skills language={language}/>
      <Projects language={language}/>
      <Education language={language}/>
    </>
  );
}

export default App;