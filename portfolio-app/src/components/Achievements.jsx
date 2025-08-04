import './Achievements.css';

const Achievements = ({ achievements, education }) => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="achievements-grid">
          <div className="achievements-section">
            <h2 className="section-title">Achievements</h2>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <p className="achievement-text">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon">🎓</div>
                  <div className="education-content">
                    <h3 className="degree">{edu.degree}</h3>
                    <h4 className="institution">{edu.institution}</h4>
                    <span className="duration">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
