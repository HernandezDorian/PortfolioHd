// import "./App.css";
import "./App.scss";
import AboutMe from "./components/about-me/about-me.jsx";
// import Calendar from "./components/calendar/calendar.jsx";
import Footer from "./components/footer/footer.jsx";

import Header from "./components/header/header";
import HelloMain from "./components/hello/hello.jsx";
import Projets from "./components/projets/projets.jsx";
// import GitHubCalendar from "react-github-calendar";
function App() {
  return (
    <>
      <Header />

      <HelloMain />

      <AboutMe />

      <Projets />

      <Footer />
    </>
  );
}

export default App;
