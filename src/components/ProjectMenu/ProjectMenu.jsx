import { ProjectData } from "../../data/ProjectData";
import styles from "./ProjectMenu.module.css";
import { motion } from "framer-motion";

const menuVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 0.5,
    },
  },
};

function ProjectMenu(props) {
  return (
    <motion.div
      className={styles.projectMenu}
      variants={menuVariant}
      initial="hidden"
      animate="visible"
      transition="transition"
    >
      {ProjectData.map((project) => {
        return (
          <button
            className={styles.pickBtn}
            onClick={props.changeProject(project)}
            style={{ backgroundColor: project === props.project && "#112a52" }}
          >
            {project.proName}
          </button>
        );
      })}
    </motion.div>
  );
}

export default ProjectMenu;
