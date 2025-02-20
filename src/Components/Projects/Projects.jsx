import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faDiagramProject} from "@fortawesome/free-solid-svg-icons"
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>About Sharda Chemicals</h2>
      <div className="projects-box">
        <div className="project-box-1">
        <FontAwesomeIcon icon={faDiagramProject} style={{color: "#FFD43B",}} />
        </div>
        <div className="project-box-2"></div>
        <div className="project-box-3"></div>
        <div className="project-box-4"></div>
      </div>
      <div className="about"></div>
    </div>
  );
};

export default Projects;
