import './App.css';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
