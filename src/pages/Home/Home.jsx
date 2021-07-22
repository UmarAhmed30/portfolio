import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./Home.module.css";
import TypewriterComponent from "typewriter-effect";

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <p className={styles.mainTitle}>Web & App Developer</p>
          <div className={styles.title}>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .changeDelay(40)
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
        </div>
        <div className={styles.profileCardContainer}>
          <ProfileCard></ProfileCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
