// import React from "react";
import React, { useState, useEffect } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import PageContainer from "../page-container/page-container";

export default function HelloMain() {
  // Taille écran début
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Taille écran fin

  const speciality = [
    "Développeur web",
    // "Freelancer",
    "Spécialité Front : React.JS",
    "Spécialité Back : Next.JS",
    "Forte appétence front-end !",
  ];

  return (
    // <PageContainer>
    <div className="hellocontainer">
      <section className="Hello" id="hello">
        {/* <div className="Hello__Lamp"></div> */}
        <h2 className="Hello__title">
          Bonjour !<div className="Hello__title__hand">👋</div>
        </h2>
        <br />
        <p className="Hello__description">
          Je suis{" "}
          <span className="Hello__description__name">Hernandez Dorian</span>
        </p>
        <div className="Hello--containertype">
          <span className="Hello__typewritter">
            <Typewriter
              words={speciality}
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <Cursor cursorColor="#ec2f4b" cursorStyle="_" />
        </div>
      </section>
    </div>
    // </PageContainer>
  );
}
