import './Experience.css';
import Lottie from 'lottie-react';
import programmingAnimation from '../assets/Programming.json';
import designerAnimation from '../assets/Designer.json';
import programmingAnimation2 from '../assets/ProgrammingAnimation.json';
import socialMediaAnimation from '../assets/Internship.json';

const Experience = ({ workExperience, internships }) => {
  const allExperience = [...workExperience, ...internships];
  
  // Array of animations to use for each experience
  const animations = [
    programmingAnimation,
    designerAnimation,
    programmingAnimation2,
    socialMediaAnimation
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {allExperience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              
              {/* Show animation on right side when card is on left (odd items) */}
              {index % 2 === 0 && (
                <div className="lottie-container lottie-right">
                  <Lottie 
                    animationData={animations[index % animations.length]}
                    loop={true}
                    autoplay={true}
                    className="lottie-animation"
                  />
                </div>
              )}
              
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
              
              {/* Show animation on left side when card is on right (even items) */}
              {index % 2 === 1 && (
                <div className="lottie-container lottie-left">
                  <Lottie 
                    animationData={animations[index % animations.length]}
                    loop={true}
                    autoplay={true}
                    className="lottie-animation"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
