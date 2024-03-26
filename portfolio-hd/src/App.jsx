// import "./App.css";
import "./App.scss";
import AboutMe from "./components/about-me/about-me.jsx";
import Header from "./components/header/header";
import HelloMain from "./components/hello/hello.jsx";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Bonjour jusqu'au typewritter */}
      <HelloMain />
      {/* A propos de moi */}
      <AboutMe />

      <section>A propos de moi</section>
      <section>Mes projets</section>
      <section>Contact</section>
    </>
  );
}

export default App;
