// import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import PageContainer from "../page-container/page-container";

export default function HelloMain() {
  const speciality = [
    "Développeur web",
    "Freelancer",
    "Spécialité Front : React.JS",
    "Spécialité Back : Next.JS",
    "Forte appétence front-end !",
  ];

  return (
    <PageContainer>
      <section className="Hello" id="hello">
        <h2 className="Hello__title">
          Bonjour !<div className="Hello__title__hand">👋</div>
        </h2>
        <br />
        <p className="Hello__description">
          Je suis{" "}
          <span className="Hello__description__name">Hernandez Dorian</span>
        </p>
        <div>
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
    </PageContainer>
  );
}
