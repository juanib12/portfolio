import Header from './components/Header'
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import Lenguagues from './components/Lenguages';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe/>
      <Lenguagues />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
