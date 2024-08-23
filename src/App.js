import "./App.css";
import Home from "./components/Home";
import AboutMe from './components/AboutMe'
import QuotesBox from './components/QuotesBox'

function App() {

  return (
    <div>
      <QuotesBox />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;