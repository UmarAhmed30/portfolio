import styles from "./Skills.module.css";
import SkillCard from "../../components/SkillCard/SkillCard";
import { SkillsData } from "../../data/SkillsData";
import TypewriterComponent from "typewriter-effect";
import SortMenu from "../../components/SortMenu/SortMenu";
import { useState } from "react";
import { motion } from "framer-motion";

const headerVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const skillsVariant = {
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

const resumeVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 1.5,
    },
  },
};

const imgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 75,
      delay: 2.5,
      duration: 1,
    },
  },
};

const hoverVariant = {
  hover: {
    scale: 1.2,
    originX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function createSkillCard(skillData) {
  return (
    <SkillCard
      key={skillData.id}
      src={skillData.icon}
      skill={skillData.skill}
      contColor={skillData.contColor}
      iconContColor={skillData.iconContColor}
    ></SkillCard>
  );
}

function Skills() {
  const [skillType, setSkillType] = useState("All");

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          variants={headerVariant}
          initial="hidden"
          animate="visible"
          transition="transition"
          className={styles.header}
        >
          <p className={styles.mainTitle}>Skills</p>
          <div className={styles.title}>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(30)
                  .typeString(
                    "I am quite familiar with the following tools and technologies."
                  )
                  .start();
              }}
            />
          </div>
        </motion.div>
        <SortMenu
          changeSkillType={(skillType) => setSkillType(skillType)}
          skillType={skillType}
        ></SortMenu>
        <motion.div
          className={styles.skillsContainer}
          variants={skillsVariant}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          {SkillsData.filter((skill) => {
            if (skillType === "All") return skill;
            else if (skillType === skill.group) return skill;
          }).map(createSkillCard)}
        </motion.div>
        <div className={styles.resumeContainer}>
          <motion.div
            className={styles.content}
            variants={resumeVariant}
            initial="hidden"
            animate="visible"
            transition="transition"
          >
            <p className={styles.mainTitle}>Resume</p>
            <div className={styles.title}>
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2000)
                    .changeDelay(30)
                    .typeString("Check my Resume out for more info.")
                    .start();
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className={styles.imgDiv}
            variants={imgVariant}
            initial="hidden"
            animate="visible"
            transition="transition"
          >
            <a
              href="https://drive.google.com/file/d/1hIuIUcDJAvzJgYgJOi-Nc2lraIVRj0uf/view?usp=sharing"
              target="_blank"
            >
              <motion.img
                className={styles.resumePreview}
                variants={hoverVariant}
                whileHover="hover"
                transition="transiton"
                src={`${process.env.PUBLIC_URL}/assets/images/Resume.jpg`}
              />
            </a>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/UmarAhmedResume.png`}
            ></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
