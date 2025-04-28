import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./Home.module.css";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

const contentVariant = {
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

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 75,
      delay: 0.5,
      duration: 1,
    },
  },
};

function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.contentContainer}
          variants={contentVariant}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          <p className={styles.mainTitle}>Software Development Engineer</p>
          <div className={styles.title}>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .changeDelay(30)
                  .typeString("Hey you! Glad you looked me up! 👀")
                  .start();
              }}
            />
          </div>
          <p className={styles.content}>
            A passionate engineer currently building real-time data pipelines for AI-powered solutions, driven by a relentless pursuit of knowledge and excellence. I specialize in web development, scalable backend systems, and machine learning infrastructure, with a keen eye for both system architecture and UI design.
          </p>
        </motion.div>
        {isActive ? (
          <div className={styles.sideContainer}>
            <ContactForm
              changeIsActive={(isActive) => setIsActive(isActive)}
            ></ContactForm>
          </div>
        ) : (
          <motion.div
            className={styles.sideContainer}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            transition="transition"
          >
            <ProfileCard
              changeIsActive={(isActive) => setIsActive(isActive)}
            ></ProfileCard>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Home;
