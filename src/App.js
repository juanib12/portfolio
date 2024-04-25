import "./App.css";
import Home from "./components/Home";
import AboutMe from './components/AboutMe'
// import Scrollbar from "smooth-scrollbar";
// import { useEffect } from "react";

// const Scroll = () => {
//   return null;
// };

function App() {
  // const options = {
  //   damping: 0.07,
  // };
  
  // useEffect(() => {
  //   Scrollbar.init(document.body, options);

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <Home />
      <AboutMe />
      {/* <Scroll /> */}
    </div>
  );
}

export default App;