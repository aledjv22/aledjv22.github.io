import Navbar from '../../Components/Navbar'
import Presentation from '../../Components/Presentation'
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import Projects from '../../Components/Projects';
import Education from '../../Components/Education';
import Certificates from '../../Components/Certificates';

const App = () => {
  return (
    <>
      <Navbar/>
      <Presentation/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certificates/>
    </>
  );
}

export default App;