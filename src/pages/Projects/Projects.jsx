import styles from "./Projects.module.css";
import { ProjectData } from "../../data/ProjectData";
import SkillCard from "../../components/SkillCard/SkillCard";
import { FaGithub } from "react-icons/fa";
import { Chrono } from "react-chrono";

function createProject(projectData) {
  return (
    <div
      className={styles.projectContainer}
      style={{ backgroundColor: projectData.proContColor }}
    >
      <div className={styles.contentContainer}>
        <p className={styles.title} style={{ color: projectData.proNameColor }}>
          {projectData.proName}
        </p>
        <p className={styles.proDesc}>{projectData.proDesc}</p>
        <div className={styles.toolsContainer}>
          <p className={styles.label}>Built using: </p>
          <div className={styles.tools}>
            {projectData.tools.map((skill) => {
              if (typeof skill === "string")
                return <p>{skill}</p>;
              else {
                return (
                  <SkillCard
                    key={skill.id}
                    src={skill.icon}
                    skill={skill.skill}
                    contColor={skill.contColor}
                    iconContColor={skill.iconContColor}
                  ></SkillCard>
                );
              }
            })}
          </div>
        </div>
        <div className={styles.source}>
          <p>Source Code:</p>
          <FaGithub className={styles.socialIcon}></FaGithub>
        </div>
      </div>
      <div className={styles.previewContainer}>
        <img className={styles.preview} src={projectData.imgLink}></img>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.mainTitle}>Projects</p>
        <Chrono
          mode="HORIZONTAL"
          theme={{
            primary: "#112a52",
            secondary: "#0a1931",
            cardBgColor: "transparent",
          }}
          hideControls="false"
          itemWidth="40"
        >
          {ProjectData.map(createProject)}
        </Chrono>
      </div>
    </div>
  );
}

export default Projects;
