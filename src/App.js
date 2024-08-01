import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Acheivements from './components/Acheivements';

function App() {
  return (
   <main>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Acheivements/>
    <Contact/>  
    

   </main>
  );
}

export default App;
