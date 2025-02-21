import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDiagramProject, faUserTie, faMedal, faPeopleGroup} from "@fortawesome/free-solid-svg-icons"
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>About Sharda Chemicals</h2>
      <div className="projects-box">
        <div className="project-box-1">
        <FontAwesomeIcon icon={faDiagramProject} style={{color: "#d4af37",}} />
        </div>
        <div className="project-box-2">
        <FontAwesomeIcon icon={faUserTie} style={{color: "#d4af37",}} />
        </div>
        <div className="project-box-3">
        <FontAwesomeIcon icon={faMedal} style={{color: "#d4af37",}} />
        </div>
        <div className="project-box-4">
        <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#d4af37",}} />
        </div>
      </div>
      <div className="about"></div>
    </div>
  );
};

export default Projects;
