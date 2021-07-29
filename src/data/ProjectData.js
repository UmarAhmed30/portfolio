import { SkillsData } from "./SkillsData";

export const ProjectData = [
  {
    id: 1,
    proName: "Corona Tracker",
    proNameColor: "#fafafa",
    proDesc:
      "A dynamic website with country-wise COVID-19 statistical data developed with custom components for better data visualization.",
    proContColor: "rgba(250, 250, 250, 0.1)",
    tools: [SkillsData[0], SkillsData[4], SkillsData[5], SkillsData[6]],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/corona-tracker.png`,
    gitLink: "https://github.com/UmarAhmed30/Corona-Tracker",
    proLink: "https://covid-tracker-6bf85b.netlify.app/",
  },
  {
    id: 2,
    proName: "MovieBase",
    proNameColor: "#FFD31D",
    proDesc:
      "A website for the users to browse through their favourite movies and explore new ones, using a JSON server.",
    proContColor: "rgba(255, 211, 29, 0.1)",
    tools: [SkillsData[1], SkillsData[4], SkillsData[5], SkillsData[6], SkillsData[8]],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/moviebase.png`,
    gitLink: "https://github.com/UmarAhmed30/moviebase-app",
    proLink: "https://moviebase-app-ecad1c.netlify.app/",
  },
  
  {
    id: 3,
    proName: "Abacus'21",
    proNameColor: "#E82278",
    proDesc:
      "Event Website of Abacus'21, an inter-college technical symposium conducted by CEG, with authentication, registration and payment modules.",
    proContColor: "rgba(232, 34, 120, 0.1)",
    tools: [SkillsData[0], SkillsData[4], SkillsData[5], SkillsData[6], SkillsData[8], '#nodeJS'],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/abacus.png`,
    gitLink: "https://github.com/UmarAhmed30/abacus-21-frontend",
    proLink: "https://hungry-banach-716135.netlify.app/homepage",
  },
  {
    id: 4,
    proName: "Online Organic Store",
    proNameColor: "#01D28E",
    proDesc:
      "An e-commerce website where the consumers and farmers can directly connect. Farmers put up their stock online and consumers buy them. Fully functional wesbite with different render for the farmers and consumers. Database implemented using well-designed ERD and Relational Schemas.",
    proContColor: "rgba(1, 210, 142, 0.1)",
    tools: [SkillsData[4], SkillsData[5], SkillsData[6], SkillsData[7], SkillsData[8], SkillsData[9], SkillsData[10], SkillsData[18]],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/online-organic-store.png`,
    gitLink: "https://github.com/UmarAhmed30/Online-Organic-Store",
  },
  {
    id: 5,
    proName: "Flutter Mini Projects",
    proNameColor: "#B77EE4",
    proDesc:
      "Made different mobile applications using Flutter like Bitcoin ticker, Chat App that uses Firebase, Weather App, Quiz App, BMI Calculator and Todolist App.",
    proContColor: "rgba(183, 126, 228, 0.1)",
    tools: [SkillsData[2], SkillsData[11], SkillsData[12], SkillsData[16]],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/flutter.png`,
    gitLink: "https://github.com/UmarAhmed30?tab=repositories",
  },
  {
    id: 6,
    proName: "Attendance Manager",
    proNameColor: "#1ed760",
    proDesc:
      "An application that would allow its user to keep track of his/her attendance, maintain his/her timetable and generate a leave form in case he/she was not able to attend the classes. This project was intended to design such an application so that the user has a clear picture of his attendance details and not miss any classes unintentionally.",
    proContColor: "rgba(30, 215, 96, 0.1)",
    tools: [SkillsData[3], "#swing", "#awt"],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/attendance-manager.png`,
    gitLink: "https://github.com/UmarAhmed30/Attendance-Manager",
  },
  {
    id: 7,
    proName: "Handwritten Text Recognition",
    proNameColor: "#0271D1",
    proDesc:
      "A website that converts handwritten text to digitized format using Convolutional Neural Network, Bidirectional Long Short-term Memory and Recurrent Neural Network.",
    proContColor: "rgba(2, 113, 209, 0.1)",
    tools: [SkillsData[4], SkillsData[5], SkillsData[6], SkillsData[7], SkillsData[8], SkillsData[8], '#python', '#tensorflow'],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/htr.jpg`,
  },
];
