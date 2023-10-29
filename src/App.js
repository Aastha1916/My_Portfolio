import About  from "./components/About";
import Navbar from "./components/navbar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
