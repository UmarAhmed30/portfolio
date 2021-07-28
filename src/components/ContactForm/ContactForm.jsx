import { useState } from "react";
import { toast } from "react-toastify";
import sendMessage from "../../api/api";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ContactForm.module.css";
import { motion } from "framer-motion";

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

toast.configure();
function ContactForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valMsg, setValMsg] = useState("");

  const handleSend = async () => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      const response = await sendMessage({
        name: name,
        email: email,
        message: message,
      });
      if (response === 200)
        toast.success("Message sent!", { position: toast.POSITION.TOP_RIGHT });
      else toast.error("Try again!");
      props.changeIsActive(false);
    } else {
      setValMsg("Please fill out the fields!");
    }
  };

  return (
    <motion.div
      className={styles.formContainer}
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      transition="transition"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className={styles.inputFields}
        placeholder="Name"
        size="25"
      ></input>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className={styles.inputFields}
        placeholder="Email"
        size="25"
      ></input>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Message"
        className={styles.textArea}
        rows="5"
        cols="28"
      ></textarea>
      <div className={styles.valMsg}>{valMsg}</div>
      <div className={styles.btnContainer}>
        <CustomButton
          onPress={(value) => props.changeIsActive(value)}
          title="Cancel"
        ></CustomButton>
        <CustomButton title="Send" onPress={() => handleSend()}></CustomButton>
      </div>
    </motion.div>
  );
}

export default ContactForm;
