import PageContainer from "../page-container/page-container";
import ProjetsGenerator from "./Projets-Generator/projets-generator";
import BG from "./../../assets/low-poly-abstract-background-Dark.jpg";
import Calendar from "./../calendar/calendar.jsx";
export default function Projets() {
  const Projects = [
    {
      title: "Projet 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam.",
      github: "https://github.com",
      live: "https://github.com",
      background: BG,
    },
    {
      title: "Projet 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam.",
      github: "https://github.com",
      live: "",
      background: BG,
    },
    {
      title: "Projet 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam.",
      github: "https://github.com",
      live: "",
      background: BG,
    },
  ];

  return (
    <section className="Projects" id="projects">
      <PageContainer>
        <div className="Projects__div">
          <h2 className="Projects__div__title">MES PROJETS</h2>
          <ProjetsGenerator projects={Projects} />
          {
            <div className="Projects__div--2">
              <h3 className="Projects__div__secondaryTitle">
                LES JOURS OU JE CODE
              </h3>
              <Calendar />
            </div>
          }
        </div>
      </PageContainer>
    </section>
  );
}
