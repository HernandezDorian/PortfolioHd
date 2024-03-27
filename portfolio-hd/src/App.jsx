// import "./App.css";
import "./App.scss";
import AboutMe from "./components/about-me/about-me.jsx";
import Calendar from "./components/calendar/calendar.jsx";

import Header from "./components/header/header";
import HelloMain from "./components/hello/hello.jsx";
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
      {/* <Calendar /> */}
      <Calendar />
      <section>Languages</section>
      {/* Jours ou je code Gradient */}
      <section>Jours ou je code</section>
      {/* Mes projets R */}
      <section>Mes projets</section>
      {/* Contact Gradient */}
      <section>Contact</section>
    </>
  );
}

export default App;
