import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDiagramProject, faUserTie, faMedal, faPeopleGroup} from "@fortawesome/free-solid-svg-icons"
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>About Sharda Chemicals</h2>
      <div className="projects-container">
  <div className="projects-box">
    <div className="project-box-1">
      <div className="project-box-heading">
        <FontAwesomeIcon icon={faDiagramProject} style={{ color: "#d4af37" }} />
        <h4>Projects</h4>
      </div>
      <p className="project-box-desc">500+ Completed</p>
    </div>
    <div className="project-box-2">
      <div className="project-box-heading">
        <FontAwesomeIcon icon={faUserTie} style={{ color: "#d4af37" }} />
        <h4>Clients Served</h4>
      </div>
      <p className="project-box-desc">10000+ Served</p>
    </div>
    <div className="project-box-3">
      <div className="project-box-heading">
        <FontAwesomeIcon icon={faMedal} style={{ color: "#d4af37" }} />
        <h4>Experience</h4>
      </div>
      <p className="project-box-desc">20 Years of Work Experience</p>
    </div>
    <div className="project-box-4">
      <div className="project-box-heading">
        <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#d4af37" }} />
        <h4>Our Team</h4>
      </div>
      <p className="project-box-desc">Passionate to work</p>
    </div>
  </div>
  {/* <div className="about">
    <div className="about-desc">
    Sharda Chemicals is a certified company that specializes in the manufacturing, supply, and distribution of various Pre and Post construction chemicals. To keep up with the flawlessness of the assortment, we procure supreme quality constituents from our dependable and trustworthy vendors. It is because of the quality and flawlessness offered that our chemicals are widely applauded in the construction industries.<br />
      <br />
      Sharda Chemicals is the leading manufacturer and supplier of superior construction chemicals. Sharda Chemicals manufactures a wide range of products which are supplied to some of the biggest construction companies and industries. These construction chemicals are widely used in the construction of industrial, commercial, and infrastructural projects.
    </div>
  </div> */}
</div>
</div>
  );
};

export default Projects;
