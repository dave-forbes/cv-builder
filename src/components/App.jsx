import Forms from "./Forms.jsx";
import CV from "./CV.jsx";
import { useState } from "react";

export default function App() {
  const [cV, setCV] = useState({
    name: "John Doe",
    email: "your.email@example.com",
    address: "1234 Example Street, AB1 2CD",
    phone: "12345678901",

    education1Name: "University of Odin",
    education1Title: "Web Development",
    education1Dates: "2023-present",

    education2Name: "University of My Dreams",
    education2Title: "Bsc Computer Science",
    education2Dates: "2019-2023",

    employment1Name: "Quantum Nexus Technologies",
    employment1Title: "Creative Innovation Specialist",
    employment1Responsibilities:
      "As a Creative Innovation Specialist at Quantum Nexus Technologies, I lead collaborative brainstorming sessions, integrate cutting-edge technologies, conduct market research, prototype new concepts, foster a culture of creativity, and present innovative findings to senior management.",
    employment1StartDate: "2023",
    employment1EndDate: "present",

    employment2Name: "Digital Experience Architect",
    employment2Title: "Infinite Horizons Solutions",
    employment2Responsibilities:
      "As a Digital Experience Architect at Infinite Horizons Solutions, I orchestrate the design and implementation of seamless user experiences, collaborate with development teams to translate business requirements into innovative digital solutions, conduct usability testing, stay abreast of industry trends, lead cross-functional workshops, and ensure alignment of digital initiatives with overarching business objectives.",
    employment2StartDate: "2018",
    employment2EndDate: "2023",

    skill1: "HTML",
    skill2: "JavaScript",
    skill3: "React",
    skill4: "Git",
    skill5: "Chrome developer tools",
  });

  function handleChange(key, value) {
    const newData = { ...cV, [key]: value };
    setCV(newData);
  }

  return (
    <>
      <Forms handleChange={handleChange} />
      <CV cV={cV} />
    </>
  );
}
