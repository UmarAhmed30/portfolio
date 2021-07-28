import styles from "./Projects.module.css";
import ProjectMenu from "../../components/ProjectMenu/ProjectMenu";
import Project from "../../components/Project/Project";
import { useState } from "react";
import { ProjectData } from "../../data/ProjectData";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const headerVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
    },
  },
};

function Projects() {
  const [project, setProject] = useState(ProjectData[0]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          variants={headerVariant}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          <p className={styles.mainTitle}>Projects</p>
          <div className={styles.title}>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .changeDelay(30)
                  .typeString("These are the projects I've worked on so far.")
                  .start();
              }}
            />
          </div>
        </motion.div>
        <ProjectMenu
          changeProject={(project) => setProject(project)}
          project={project}
        ></ProjectMenu>
        <Project project={project}></Project>
      </div>
    </div>
  );
}

export default Projects;
