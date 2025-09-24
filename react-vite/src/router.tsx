import { Routes, Route, Link } from 'react-router-dom';
import App from './App';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function Router() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Router;
