import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ParticlesBG from "./components/ParticlesBG";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <ParticlesBG />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
