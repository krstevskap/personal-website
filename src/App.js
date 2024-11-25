import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: false,
      startEvent: "scroll",
    });
  }, []);

  return (
    <div className="App">
      <Homepage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
