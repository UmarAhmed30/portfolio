import styles from "./Project.module.css";
import SkillCard from "../../components/SkillCard/SkillCard";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { motion } from "framer-motion";

const hoverVariant = {
  hover: {
    scale: 1.25,
    originX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const projectVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 75,
      delay: 1,
      duration: 1,
    },
  },
};

function Project(props) {
  return (
    <motion.div
      className={styles.projectContainer}
      style={{ backgroundColor: props.project.proContColor }}
      variants={projectVariant}
      initial="hidden"
      animate="visible"
      transition="transition"
    >
      <div className={styles.contentContainer}>
        <p
          className={styles.title}
          style={{ color: props.project.proNameColor }}
        >
          {props.project.proName}
        </p>
        <p className={styles.proDesc}>{props.project.proDesc}</p>
        <div className={styles.toolsContainer}>
          <p className={styles.label}>Built using: </p>
          <div className={styles.tools}>
            {props.project.tools.map((skill) => {
              if (typeof skill === "string") return <p>{skill}</p>;
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
        <div className={styles.links}>
          {props.project.gitLink != null && (<motion.a
            href={props.project.gitLink}
            target="_blank"
            className={styles.socialIcon}
            variants={hoverVariant}
            whileHover="hover"
            transition="transiton"
          >
            <FaGithub size="24"></FaGithub>
          </motion.a>
          )}
          {props.project.proLink != null && (
            <motion.a
              href={props.project.proLink}
              target="_blank"
              className={styles.socialIcon}
              variants={hoverVariant}
              whileHover="hover"
              transition="transiton"
            >
              <HiLink size="24"></HiLink>
            </motion.a>
          )}
        </div>
      </div>
      <div className={styles.previewContainer}>
        <img className={styles.preview} src={props.project.imgLink}></img>
      </div>
    </motion.div>
  );
}

export default Project;
