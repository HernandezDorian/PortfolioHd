import BG from "./../../../assets/low-poly-abstract-background-Dark.jpg";
import GithubLogo from "./../../../assets/github-142-svgrepo-com.svg";
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
            backgroundImage: `url('${BG}')`,
          }}
        >
          <div className="Projects__div__elem__card">
            <h3 className="Projects__div__elem__card__title">
              {project.title}
            </h3>
            <p className="Project__div__elem__card__desc">
              {project.description}
            </p>
            <button className="Projects__div__elem__card__btn button">
              GITHUB{" "}
              <img
                className="Projects__div__elem__card__btn__git"
                src={GithubLogo}
                alt="Github Logo"
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
