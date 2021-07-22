import styles from "./SkillCard.module.css";

function SkillCard(props) {
  return (
    <div className={styles.skillCard} style={{"backgroundColor":props.contColor}}>
      <div className={styles.iconContainer} style={{"backgroundColor":props.iconContColor}}>
        <img
          src={props.src}
          className={styles.skillIcon}
        ></img>
      </div>
      <span className={styles.skillLabel}>{props.skill}</span>
    </div>
  );
}

export default SkillCard;
