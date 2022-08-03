import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import ParticlesBG from "./components/ParticlesBG";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <ParticlesBG />
      <MainContent />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
