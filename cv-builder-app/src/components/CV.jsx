/* eslint-disable react/prop-types */
import "../css/CV.css";

export default function CV({ name }) {
  return (
    <div className="C-V">
      <header>
        <h1>{name}</h1>
        <p>Curriculum Vitae</p>
      </header>

      <section>
        <h2>Contact Information</h2>
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>LinkedIn: linkedin.com/in/yourname</p>
      </section>

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
