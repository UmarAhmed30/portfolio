import styles from "./ProfileCard.module.css";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";

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

function ProfileCard(props) {
  defineLordIconElement(loadAnimation);
  return (
    <div className={styles.profileCard}>
      <div className={styles.genInfo}>
        <img
          className={styles.avatar}
          src={`${process.env.PUBLIC_URL}/assets/images/Avatar.png`}
        ></img>
        <div className={styles.namePane}>
          <span className={styles.title}>Umar Ahmed T</span>
          <span>Software Development Engineer</span>
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
          <span>Bangalore, Karnataka, India</span>
        </div>
        <div className={styles.infoItem}>
          <span>
            <lord-icon
              trigger="loop"
              src={`${process.env.PUBLIC_URL}/assets/icons/email.json`}
            ></lord-icon>
          </span>
          <span>umar.ahmed.t.30@gmail.com</span>
        </div>
      </div>
      <div className={styles.profileFooter}>
        <div className={styles.contactLinks}>
          <IconContext.Provider value={{ size: "1.25em" }}>
            <motion.a
              href="https://github.com/UmarAhmed30"
              target="_blank"
              variants={hoverVariant}
              whileHover="hover"
              transition="transiton"
            >
              <FaGithub className={styles.socialIcon}></FaGithub>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/umarahmed2000/"
              target="_blank"
              variants={hoverVariant}
              whileHover="hover"
              transition="transiton"
            >
              <FaLinkedin className={styles.socialIcon}></FaLinkedin>
            </motion.a>
          </IconContext.Provider>
        </div>
        <CustomButton
          onPress={(value) => props.changeIsActive(value)}
          title={"Say Hello"}
        ></CustomButton>
      </div>
    </div>
  );
}

export default ProfileCard;
