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
        <h3>Degree in Something Awesome</h3>
        <p>University Name, Graduation Year</p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <h3>Job Title</h3>
        <p>Company Name, Start Date - End Date</p>
        <p>
          Description of your responsibilities and achievements in this role.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React, etc.</p>
      </section>
    </div>
  );
}
