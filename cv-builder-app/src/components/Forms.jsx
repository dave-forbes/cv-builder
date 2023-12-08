import Title from "./Title";
import FormContainer from "./FormContainer";

export default function Forms() {
  return (
    <div className="forms">
      <Title />
      <FormContainer
        title="General Info"
        className="general-info"
        elements={
          <>
            <label className="full-name" htmlFor="full-name">
              Full Name <input id="full-name" />
            </label>
            <label className="email" htmlFor="email">
              Email <input id="email" />
            </label>
            <label className="address" htmlFor="address">
              Address <input id="address" />
            </label>
            <label className="phone" htmlFor="phone">
              Phone <input id="phone" />
            </label>
          </>
        }
      />
      <FormContainer
        title="Education"
        className="education"
        elements={
          <>
            <label className="school-name" htmlFor="school-name">
              School name <input id="school-name" />
            </label>
            <label className="title-of-study" htmlFor="title-of-study">
              Title of study <input id="title-of-study" />
            </label>
            <label className="date-of-study" htmlFor="date-of-study">
              Date of study <input id="date-of-study" />
            </label>
          </>
        }
      />
      <FormContainer
        title="Employment"
        className="employment"
        elements={
          <>
            <label className="company-name" htmlFor="company-name">
              Company name <input id="company-name" />
            </label>
            <label className="position-title" htmlFor="position-title">
              Position title <input id="position-title" />
            </label>
            <label
              className="main-responsibilities"
              htmlFor="main-responsibilities"
            >
              Main responsibilities <input id="main-responsibilities" />
            </label>
            <label className="employment-started" htmlFor="employment-started">
              Employment started <input id="employment-started" />
            </label>
            <label className="employment-ended" htmlFor="employment-ended">
              Employment ended <input id="employment-ended" />
            </label>
          </>
        }
      />
    </div>
  );
}
