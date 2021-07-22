import styles from "./Skills.module.css";
import SkillCard from "../../components/SkillCard/SkillCard";
import { SkillsData } from "../../data/SkillsData";
import TypewriterComponent from "typewriter-effect";
import SortMenu from "../../components/SortMenu/SortMenu";
import { useState } from "react";

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
      <div className={styles.header}>
        <p className={styles.mainTitle}>Skills</p>
        <div className={styles.title}>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .changeDelay(40)
                .typeString(
                  "I am quite familiar with the following tools and technologies."
                )
                .start();
            }}
          />
        </div>
      </div>
      <SortMenu
        changeSkillType={(skillType) => setSkillType(skillType)}
      ></SortMenu>
      <div className={styles.skillsContainer}>
        {SkillsData.filter((skill) => {
          if (skillType === "All") return skill;
          else if (skillType === skill.group) return skill;
        }).map(createSkillCard)}
      </div>
    </div>
    </div>
  );
}

export default Skills;
