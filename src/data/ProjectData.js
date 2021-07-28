import { SkillsData } from "./SkillsData";

export const ProjectData = [
  {
    id: 1,
    proName: "Attendance Manager",
    proNameColor: "#1ed760",
    proDesc:
      "An application that would allow its user to keep track of his/her attendance, maintain his/her timetable and generate a leave form in case he/she was not able to attend the classes. This project was intended to design such an application so that the user has a clear picture about his attendance details and not miss any class unintentionally.",
    proContColor: "rgba(30, 215, 96, 0.1)",
    tools: [SkillsData[3], "#swing", "#awt"],
    imgLink: `${process.env.PUBLIC_URL}/assets/images/Projects/attendance-manager.png`,
    gitLink: "https://github.com/UmarAhmed30/Attendance-Manager",
  },
];
