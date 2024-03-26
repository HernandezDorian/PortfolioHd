// import "./App.css";
import "./App.scss";
import Header from "./components/header/header";
import HelloMain from "./components/hello/hello.jsx";

function App() {
  return (
    <>
      <Header />
      {/* <p>AAA</p> */}
      <HelloMain />
      <section>Bonjour + typewriter</section>
      <section>A propos de moi</section>
      <section>Mes projets</section>
      <section>Contact</section>
    </>
  );
}

export default App;
