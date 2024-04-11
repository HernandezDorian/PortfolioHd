import PageContainer from "../page-container/page-container";
import ProjetsGenerator from "./Projets-Generator/projets-generator";
// import BG from "./../../assets/low-poly-abstract-background-Dark.jpg";
import Calendar from "./../calendar/calendar.jsx";

import ohmyfoodBG from "./../../assets/projets/ohmyfood.webp";
import SophiebluelBG from "./../../assets/projets/SophieBluel.webp";
import KasaBG from "./../../assets/projets/kasa.webp";
import ArgentBank from "./../../assets/projets/ArgentBank.webp";
import pomodoro from "./../../assets/projets/pomodoro.webp";
export default function Projets() {
  const Projects = [
    {
      title: "Restaurant - OhMyFood",
      description:
        "C'est un site statique ayant pour but de regrouper les différents menus de restaurants. (HTML + CSS + SCSS)",
      github: "https://github.com/HernandezDorian/OpenclassroomProjet4",
      live: "https://ohmyfoodhd.netlify.app/",
      background: ohmyfoodBG,
    },
    {
      title: "Architecte d'intérieur - Sophie Bluel",
      description:
        "C'est un site permettant à une architecte d'intérieure de l'éditer en temps réel pour ajouter et trier ses projets. (HTML + CSS + JS)",
      github: "https://github.com/HernandezDorian/OpenclassroomProjet6",
      live: "",
      background: SophiebluelBG,
    },
    {
      title: "Location immobilière - Kasa",
      description:
        "C'est un site permettant à une agence immobilière de mettre en relation des locataires et des loueurs. Permettant aux loueurs de publier les locations (HTML + CSS + ReactJS)",
      github: "https://github.com/HernandezDorian/Kasa-react",
      live: "https://dulcet-pasca-2632bd.netlify.app/",
      background: KasaBG,
    },
    {
      title: "Banque - ArgentBank",
      description:
        "C'est un site permettant à une banque de gérer les comptes de ses clients. (HTML + CSS + ReactJS + React Redux)",
      github: "https://github.com/HernandezDorian/ArgentBank-website",
      live: "",
      background: ArgentBank,
    },
    {
      title: "Pomodoro",
      description:
        "Il s'agit d'un projet personnel d'application de pomodoro afin de pouvoir mieux organiser mes journées de travail (HTML + CSS + ReactJS)",
      github: "https://github.com/HernandezDorian/Pomodoro",
      live: "https://elegant-travesseiro-6e41cf.netlify.app/",
      background: pomodoro,
    },
  ];

  return (
    <section className="Projects" id="projects">
      <PageContainer>
        <div className="Projects__div">
          <h2 className="Projects__div__title">MES PRINCIPAUX PROJETS</h2>
          <ProjetsGenerator projects={Projects} />
          {
            <div className="Projects__div--2">
              <h2 className="Projects__div__secondaryTitle">
                LES JOURS OU JE CODE
              </h2>
              <Calendar />
            </div>
          }
        </div>
      </PageContainer>
    </section>
  );
}
