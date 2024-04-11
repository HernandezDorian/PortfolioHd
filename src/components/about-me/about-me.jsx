import Languages from "../languages/languages";
import PageContainer from "../page-container/page-container";
import pp from "./../../assets/PP.webp";

export default function AboutMe() {
  return (
    <section className="Aboutme" id="about">
      <PageContainer>
        <div className="Aboutme__int">
          <div className="Aboutme__int__imgZone">
            <img
              className="Aboutme__int__imgZone__photo"
              src={pp}
              alt="Ma tête"
            ></img>
          </div>
          <div className="Aboutme__int__txtZone">
            <h2 className="Aboutme__int__txtZone__title">A PROPOS DE MOI</h2>
            <p className="Aboutme__int__txtZone__info">
              {`
              Bienvenue dans mon portfolio ! Je suis Hernandez Dorian, un
              développeur web passionné âgé de 25 ans, spécialisé dans le
              front-end et plus particulièrement dans le framework React.
              Diplômé de l'école de formation Openclassroom, j'ai acquis les
              compétences nécessaires pour concevoir des interfaces utilisateur
              interactives et esthétiques. Mon parcours académique et mes
              expériences professionnelles m'ont permis de développer une
              expertise solide dans le domaine du développement web, en
              utilisant les dernières technologies et les meilleures pratiques
              de l'industrie. Je suis constamment à la recherche de nouveaux
              défis pour améliorer mes compétences et élargir mon champ
              d'expertise. Dans ce portfolio, vous trouverez une sélection de
              mes projets les plus représentatifs, qui démontrent mon
              savoir-faire et ma créativité en matière de développement web.
              N'hésitez pas à me contacter pour discuter de vos projets et de la
              façon dont je peux vous aider à les réaliser.`}
            </p>
          </div>
        </div>
        <Languages />
      </PageContainer>
    </section>
  );
}
