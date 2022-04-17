import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/resume" element={<Resume />}/>
    </Routes>
  </BrowserRouter>,
    </>
  );
}

export default App;
