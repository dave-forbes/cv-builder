export default function Education() {
  return (
    <div className="education">
      <div className="title-container">
        <h2>Education</h2>
        <svg viewBox="0 0 330 330">
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <form className="hide">
        <label className="school-name" htmlFor="school-name">
          School name <input id="school-name" />
        </label>
        <label className="title-of-study" htmlFor="title-of-study">
          Title of study <input id="title-of-study" />
        </label>
        <label className="date-of-study" htmlFor="date-of-study">
          Date of study <input id="date-of-study" />
        </label>
        <div className="buttons">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
}
