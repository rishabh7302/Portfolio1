import Galaxy from './Galaxy';
import NavBar from "./nav";
import Hero from "./hero";
import PlatformStats from "./PlatformStats";
import ProjectShowcase from "./ProjectShowcase";
import ThemeSwitcher from "./ThemeSwitcher";
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Galaxy background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: 'black',
      }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />

        <section id="home" className="py-16 px-4 bg-transparent">
          <Hero />
        </section>

        <section id="projects" className="py-16 px-4 bg-transparent">
          <ProjectShowcase />
        </section>

        <section id="skills" className="py-16 px-4 bg-transparent">
          <PlatformStats />
        </section>

        <section id="resume" className="py-16 px-4 bg-transparent">
          <div className="text-center mt-4">
            <a
              href="public/resume.pdf"
              download
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section id="theme" className="py-16 px-4 bg-transparent">
          <ThemeSwitcher />
        </section>
      </div>
    </div>
  );
};

export default Main;
