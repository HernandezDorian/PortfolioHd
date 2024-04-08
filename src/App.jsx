import { useState, useContext, useEffect } from "react";
import "./App.scss";
import AboutMe from "./components/about-me/about-me.jsx";
import DarkMode from "./components/dark-mode/dark-mode.jsx";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header";
import HelloMain from "./components/hello/hello.jsx";
import Projets from "./components/projets/projets.jsx";
import { DarkModeContext } from "./components/dark-mode/DarkModeContext.jsx";
import LightBg from "./assets/low-poly-abstract-background.jpg";
import DarkBg from "./assets/low-poly-abstract-background-Dark.jpg";

function App() {
  const [switchDarkMode, setSwitchDarkMode] = useState(false);

  useEffect(() => {
    if (switchDarkMode) {
      document.body.style.background = `url(${DarkBg})`;
    } else {
      document.body.style.background = `url(${LightBg})`;
    }
  }, [switchDarkMode]);

  return (
    <DarkModeContext.Provider value={[switchDarkMode, setSwitchDarkMode]}>
      <div className={switchDarkMode ? "dark" : "light"}>
        <Header />

        <HelloMain />
        <AboutMe />
        <Projets />
        <DarkMode />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
