import styles from "./CustomButton.module.css";

function CustomButton(props) {
  return (
    <button
      onClick={() => {
        props.title === "Say Hello" && props.onPress(true);
        props.title === "Cancel" && props.onPress(false);
        props.title === "Send" && props.onPress();
      }}
      className={styles.msgBtn}
    >
      {props.title}
    </button>
  );
}

export default CustomButton;
