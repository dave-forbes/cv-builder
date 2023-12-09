/* eslint-disable react/prop-types */
import "../css/CV.css";

export default function CV({ cV }) {
  return (
    <div className="C-V">
      <header>
        <h1>{cV.name}</h1>
        <p>{cV.email}</p>
        <p>{cV.address}</p>
        <p>{cV.phone}</p>
      </header>
      <section>
        <h2>Education</h2>
        <h3>{cV.education1Title}</h3>
        <p>
          {cV.education1Name}, {cV.education1Dates}
        </p>
        <h3>{cV.education2Title}</h3>
        <p>
          {cV.education2Name}, {cV.education2Dates}
        </p>
      </section>

      <section>
        <h2>Emploment</h2>
        <h3>{cV.employment1Title}</h3>
        <p>
          {cV.employment1Name}, {cV.employment1StartDate} -{" "}
          {cV.employment1EndDate}
        </p>
        <p>{cV.employment1Responsibilities}</p>
        <h3>{cV.employment2Title}</h3>
        <p>
          {cV.employment2Name}, {cV.employment2StartDate} -{" "}
          {cV.employment2EndDate}
        </p>
        <p>{cV.employment2Responsibilities}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          {cV.skill1}, {cV.skill2}, {cV.skill3}, {cV.skill4}, {cV.skill5}
        </p>
      </section>
    </div>
  );
}
