import GithubLogo from "./../../../assets/github-142-svgrepo-com.svg";
import ViewLogo from "./../../../assets/view-svgrepo-com.svg";
import PropTypes from "prop-types";

export default function ProjetsGenerator({ projects }) {
  ProjetsGenerator.propTypes = {
    projects: PropTypes.array.isRequired,
  };
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="Projects__div__elem"
          style={{
            backgroundImage: `url('${project.background}')`,
          }}
        >
          <div className="Projects__div__elem__card">
            <h3 className="Projects__div__elem__card__title">
              {project.title}
            </h3>
            <p className="Project__div__elem__card__desc">
              {project.description}
            </p>
            <div className="btncontainer">
              {project.github && (
                <a href={project.github} target="_blank">
                  <button className="Projects__div__elem__card__btn button">
                    GITHUB
                    <img
                      className="Projects__div__elem__card__btn__git"
                      src={GithubLogo}
                      alt="Github Logo"
                    />
                  </button>
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank">
                  <button className="Projects__div__elem__card__btn button">
                    LIVE
                    <img
                      className="Projects__div__elem__card__btn__git"
                      src={ViewLogo}
                      alt="Github Logo"
                    />
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
