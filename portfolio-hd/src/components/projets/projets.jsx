import PageContainer from "../page-container/page-container";
import ProjetsGenerator from "./Projets-Generator/projets-generator";

export default function Projets() {
  const Projects = [
    {
      title: "Projet 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam.",
      github: "https://github.com",
    },
  ];

  return (
    <section className="Projects">
      <PageContainer>
        <div className="Projects__div">
          <h2 className="Projects__div__title">MES PROJETS</h2>
          <ProjetsGenerator projects={Projects} />
        </div>
      </PageContainer>
    </section>
  );
}
