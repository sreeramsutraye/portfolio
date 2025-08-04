import './Skills.css';

const Skills = ({ skills }) => {
  const skillCategories = [
    { key: 'programming', title: 'Programming', icon: '💻' },
    { key: 'frameworks', title: 'Frameworks', icon: '🚀' },
    { key: 'databases', title: 'Databases', icon: '🗄️' },
    { key: 'frontend', title: 'Frontend', icon: '🎨' },
    { key: 'devops', title: 'DevOps', icon: '⚙️' },
    { key: 'tools', title: 'Tools', icon: '🛠️' },
    { key: 'concepts', title: 'Concepts', icon: '💡' },
    { key: 'softSkills', title: 'Soft Skills', icon: '🤝' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map(({ key, title, icon }) => (
            skills[key] && skills[key].length > 0 && (
              <div key={key} className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{icon}</span>
                  <h3 className="category-title">{title}</h3>
                </div>
                <div className="skill-tags">
                  {skills[key].map((skill, index) => (
                    <span key={index} className="skill-tag interactive">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
