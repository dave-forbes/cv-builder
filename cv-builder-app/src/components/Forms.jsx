import Title from "./Title";
import GeneralInfo from "../GeneralInfo";
import Education from "./Education";
import Employment from "./Employment";

export default function Forms() {
  return (
    <div className="forms">
      <Title />
      <GeneralInfo />
      <Education />
      <Employment />
    </div>
  );
}
