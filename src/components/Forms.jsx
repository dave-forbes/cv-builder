/* eslint-disable react/prop-types */
import { useState } from "react";

import Title from "./Title";
import FormContainer from "./FormContainer";

export default function Forms({ handleChange }) {
  const [isOpened, setIsOpened] = useState(0);
  const [isEducationOpened, setIsEducationOpened] = useState(0);
  const [isEmploymentOpened, setIsEmploymentOpened] = useState(0);

  function handleClick(num) {
    num !== isOpened ? setIsOpened(num) : setIsOpened(4);
  }

  function handleEducationClick(num) {
    num !== isEducationOpened
      ? setIsEducationOpened(num)
      : setIsEducationOpened(3);
  }
  function handleEmplomentClick(num) {
    num !== isEmploymentOpened
      ? setIsEmploymentOpened(num)
      : setIsEmploymentOpened(3);
  }

  return (
    <div className="forms">
      <Title />
      <FormContainer
        onClick={() => handleClick(0)}
        isOpened={isOpened === 0}
        title="General Info"
        className="general-info"
        elements={
          <>
            <label className="full-name" htmlFor="full-name">
              Full Name{" "}
              <input
                onChange={(e) => handleChange("name", e.target.value)}
                id="full-name"
              />
            </label>
            <label className="email" htmlFor="email">
              Email{" "}
              <input
                onChange={(e) => handleChange("email", e.target.value)}
                id="email"
              />
            </label>
            <label className="address" htmlFor="address">
              Address{" "}
              <input
                onChange={(e) => handleChange("address", e.target.value)}
                id="address"
              />
            </label>
            <label className="phone" htmlFor="phone">
              Phone{" "}
              <input
                onChange={(e) => handleChange("phone", e.target.value)}
                id="phone"
              />
            </label>
          </>
        }
      />
      <FormContainer
        onClick={() => handleClick(1)}
        isOpened={isOpened === 1}
        title="Education"
        className="education"
        elements={
          <>
            <FormContainer
              onClick={() => handleEducationClick(1)}
              isOpened={isEducationOpened === 1}
              title="Education-1"
              className="education-item"
              elements={
                <>
                  <label className="school-name" htmlFor="school-name">
                    School name{" "}
                    <input
                      onChange={(e) =>
                        handleChange("education1Name", e.target.value)
                      }
                      id="school-name"
                    />
                  </label>
                  <label className="title-of-study" htmlFor="title-of-study">
                    Title of study{" "}
                    <input
                      onChange={(e) =>
                        handleChange("education1Title", e.target.value)
                      }
                      id="title-of-study"
                    />
                  </label>
                  <label className="date-of-study" htmlFor="date-of-study">
                    Dates of study{" "}
                    <input
                      onChange={(e) =>
                        handleChange("education1Dates", e.target.value)
                      }
                      id="date-of-study"
                    />
                  </label>
                </>
              }
            />
            <FormContainer
              onClick={() => handleEducationClick(2)}
              isOpened={isEducationOpened === 2}
              title="Education-2"
              className="education-item"
              elements={
                <>
                  <label className="school-name" htmlFor="school-name">
                    School name{" "}
                    <input
                      onChange={(e) =>
                        handleChange("education2Name", e.target.value)
                      }
                      id="school-name"
                    />
                  </label>
                  <label className="title-of-study" htmlFor="title-of-study">
                    Title of study{" "}
                    <input
                      onChange={(e) =>
                        handleChange("education2Title", e.target.value)
                      }
                      id="title-of-study"
                    />
                  </label>
                  <label className="date-of-study" htmlFor="date-of-study">
                    Dates of study{" "}
                    <input
                      onChange={(e) =>
                        handleChange("education2Dates", e.target.value)
                      }
                      id="date-of-study"
                    />
                  </label>
                </>
              }
            />
          </>
        }
      />
      <FormContainer
        onClick={() => handleClick(2)}
        isOpened={isOpened === 2}
        title="Employment"
        className="employment"
        elements={
          <>
            <FormContainer
              onClick={() => handleEmplomentClick(1)}
              isOpened={isEmploymentOpened === 1}
              title="Employment-1"
              className="employment-item"
              elements={
                <>
                  <label className="company-name" htmlFor="company-name">
                    Company name{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment1Name", e.target.value)
                      }
                      id="company-name"
                    />
                  </label>
                  <label className="position-title" htmlFor="position-title">
                    Position title{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment1Title", e.target.value)
                      }
                      id="position-title"
                    />
                  </label>
                  <label
                    className="main-responsibilities"
                    htmlFor="main-responsibilities"
                  >
                    Main responsibilities{" "}
                    <input
                      onChange={(e) =>
                        handleChange(
                          "employment1Responsibilities",
                          e.target.value
                        )
                      }
                      id="main-responsibilities"
                    />
                  </label>
                  <label
                    className="employment-started"
                    htmlFor="employment-started"
                  >
                    Employment started{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment1StartDate", e.target.value)
                      }
                      id="employment-started"
                    />
                  </label>
                  <label
                    className="employment-ended"
                    htmlFor="employment-ended"
                  >
                    Employment ended{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment1EndDate", e.target.value)
                      }
                      id="employment-ended"
                    />
                  </label>
                </>
              }
            />
            <FormContainer
              onClick={() => handleEmplomentClick(2)}
              isOpened={isEmploymentOpened === 2}
              title="Employment-2"
              className="employment-item"
              elements={
                <>
                  <label className="company-name" htmlFor="company-name">
                    Company name{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment2Name", e.target.value)
                      }
                      id="company-name"
                    />
                  </label>
                  <label className="position-title" htmlFor="position-title">
                    Position title{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment2Title", e.target.value)
                      }
                      id="position-title"
                    />
                  </label>
                  <label
                    className="main-responsibilities"
                    htmlFor="main-responsibilities"
                  >
                    Main responsibilities{" "}
                    <input
                      onChange={(e) =>
                        handleChange(
                          "employment2Responsibilities",
                          e.target.value
                        )
                      }
                      id="main-responsibilities"
                    />
                  </label>
                  <label
                    className="employment-started"
                    htmlFor="employment-started"
                  >
                    Employment started{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment2StartDate", e.target.value)
                      }
                      id="employment-started"
                    />
                  </label>
                  <label
                    className="employment-ended"
                    htmlFor="employment-ended"
                  >
                    Employment ended{" "}
                    <input
                      onChange={(e) =>
                        handleChange("employment2EndDate", e.target.value)
                      }
                      id="employment-ended"
                    />
                  </label>
                </>
              }
            />
          </>
        }
      />
      <FormContainer
        onClick={() => handleClick(3)}
        isOpened={isOpened === 3}
        title="Skills"
        className="skills"
        elements={
          <>
            <label className="skill-1" htmlFor="skill-1">
              Skill 1{" "}
              <input
                onChange={(e) => handleChange("skill1", e.target.value)}
                id="skill-1"
              />
            </label>
            <label className="skill-2" htmlFor="skill-2">
              Skill 2{" "}
              <input
                onChange={(e) => handleChange("skill2", e.target.value)}
                id="skill-2"
              />
            </label>
            <label className="skill-3" htmlFor="skill-3">
              Skill 3{" "}
              <input
                onChange={(e) => handleChange("skill3", e.target.value)}
                id="skill-3"
              />
            </label>
            <label className="skill-4" htmlFor="skill-4">
              Skill 4{" "}
              <input
                onChange={(e) => handleChange("skill4", e.target.value)}
                id="skill-4"
              />
            </label>
            <label className="skill-5" htmlFor="skill-5">
              Skill 5{" "}
              <input
                onChange={(e) => {
                  handleChange("skill5", e.target.value);
                }}
                id="skill-5"
              />
            </label>
          </>
        }
      />
    </div>
  );
}
