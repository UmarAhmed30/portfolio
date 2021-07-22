import styles from "./SortMenu.module.css";
import { skillSets } from "../../data/SkillSet";

function SortMenu(props) {
  return (
    <div className={styles.sortMenu}>
      {skillSets.map((skillSet) => {
        return (
          <button
            className={styles.sortBtn}
            onClick={() => {
              props.changeSkillType(skillSet);
            }}
          >
            {skillSet}
          </button>
        );
      })}
    </div>
  );
}

export default SortMenu;
