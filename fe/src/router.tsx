import { Routes, Route, Link } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import ParallaxDemo from './Components/ParallaxDemo/ParallaxDemo';

function Router() {
  return (
    <div>      
      <nav style={{height: "5vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", backgroundColor: "#f0f0f0", position: "sticky", top: 0, zIndex: 1000}}>
        <Link to="/">Courses</Link> 
        | <Link to="/about">About</Link> 
        | <Link to="/contact">Contact</Link>
        | <Link to="/parallax">ParallaxDemo</Link>
      </nav>
      <div style={{height: "95vh"}}>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parallax" element={<ParallaxDemo />} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
