import styles from './ProfileCard.module.css';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function ProfileCard() {
  defineLordIconElement(loadAnimation);
  return (
    <div className={styles.profileCard}>
      <div className={styles.genInfo}>
        <img className={styles.avatar}
          src={`${process.env.PUBLIC_URL}/assets/images/Avatar.png`}
        ></img>
        <div className={styles.namePane}>
          <span className={styles.title}>T Umar Ahmed</span>
          <span>Web & App Developer</span>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <span>
            <lord-icon
              trigger="loop"
              src={`${process.env.PUBLIC_URL}/assets/icons/location.json`}
            ></lord-icon>
          </span>
          <span>Chennai, India</span>
        </div>
        <div className={styles.infoItem}>
          <span>
            <lord-icon
              trigger="loop"
              src={`${process.env.PUBLIC_URL}/assets/icons/email.json`}
            ></lord-icon>
          </span>
          <span>tumarahmed@gmail.com</span>
        </div>
      </div>
      <div className={styles.contactLinks}>
        <IconContext.Provider value={{ size: "1.25em" }}>
          <FaGithub className={styles.socialIcon}></FaGithub>
          <FaLinkedin className={styles.socialIcon}></FaLinkedin>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ProfileCard;
