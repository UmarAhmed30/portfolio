import styles from "./SortMenu.module.css";
import { skillSets } from "../../data/SkillSet";
import { motion } from "framer-motion";
import { ProjectData } from "../../data/ProjectData";

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

function SortMenu(props) {
  return (
    <motion.div
      className={styles.sortMenu}
      variants={menuVariant}
      initial="hidden"
      animate="visible"
      transition="transition"
    >
      {skillSets.map((skillSet) => {
        return (
          <button
            className={styles.sortBtn}
            style={{
              backgroundColor: skillSet === props.skillType && "#112a52",
            }}
            onClick={() => {
              props.changeSkillType(skillSet);
            }}
          >
            {skillSet}
          </button>
        );
      })}
    </motion.div>
  );
}

export default SortMenu;
