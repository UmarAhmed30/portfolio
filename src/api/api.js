import emailjs from "emailjs-com";

const sendMessage = async (msgTemplate) => {
  try {
    const response = await emailjs.send(
      "service_jxkkd94",
      "template_47cu0mq",
      msgTemplate,
      "user_awIQ2MxxusHRMslOmxPSw"
    );
    return response.status;
  } catch (error) {
    return error.status;
  }
};

export default sendMessage;
