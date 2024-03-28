// import "./App.css";
import "./App.scss";
import AboutMe from "./components/about-me/about-me.jsx";
import Calendar from "./components/calendar/calendar.jsx";

import Header from "./components/header/header";
import HelloMain from "./components/hello/hello.jsx";
import Projets from "./components/projets/projets.jsx";
// import GitHubCalendar from "react-github-calendar";
function App() {
  return (
    <>
      {/* Header GRADIENT*/}
      <Header />
      {/* Bonjour jusqu'au typewritter R */}
      <HelloMain />
      {/* A propos de moi  GRADIENT*/}
      <AboutMe />
      {/* Languages  R*/}

      {/* Mes projets R */}
      <Projets />

      {/* <Calendar /> */}
      {/* Contact Gradient */}
      <section>Contact</section>
    </>
  );
}

export default App;
