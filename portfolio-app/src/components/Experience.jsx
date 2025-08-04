import './Experience.css';

const Experience = ({ workExperience, internships }) => {
  const allExperience = [...workExperience, ...internships];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {allExperience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <div className="company-duration">
                    <h4 className="company">{exp.company}</h4>
                    <span className="duration">{exp.duration}</span>
                  </div>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="responsibility">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
