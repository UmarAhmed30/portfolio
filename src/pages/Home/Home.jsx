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
      <ImageLoader></ImageLoader>
      <div className={styles.container}>
        <motion.div
          className={styles.contentContainer}
          variants={contentVariant}
          initial="hidden"
          animate="visible"
          transition="transition"
        >
          <p className={styles.mainTitle}>Web & App Developer</p>
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
            I am a web & app developer with good experience in ReactJS,
            AngularJS and Flutter. I have built a considerable amount of
            applications of varying degrees of complexity.
          </p>
          <p className={styles.content}>
            If you're wondering, I'm a student currently pursuing B.E Computer
            Science and Engineering at College of Engineering, Chennai. I might
            describe myself as an enthusiastic and hardworking student in thirst
            of knowledge and new skills, and I believe I have a keen eye for
            design.
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
