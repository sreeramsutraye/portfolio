import './Contact.css';

const Contact = ({ contact }) => {
  const contactLinks = [
    {
      platform: 'GitHub',
      url: contact.github,
      icon: '🔗',
      label: 'GitHub Profile'
    },
    {
      platform: 'LinkedIn',
      url: contact.linkedin,
      icon: '💼',
      label: 'LinkedIn Profile'
    },
    {
      platform: 'Email',
      url: `mailto:${contact.email}`,
      icon: '📧',
      label: contact.email
    },
    {
      platform: 'Phone',
      url: `tel:${contact.phone}`,
      icon: '📱',
      label: contact.phone
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="location">
              <span className="location-icon">📍</span>
              <span className="location-text">{contact.location}</span>
            </div>
            <p className="contact-description">
              I'm always open to discussing new opportunities, collaborations, 
              or just having a chat about technology and innovation.
            </p>
          </div>
          
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="contact-link interactive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contact via ${link.platform}`}
              >
                <span className="contact-icon">{link.icon}</span>
                <div className="contact-details">
                  <span className="contact-platform">{link.platform}</span>
                  <span className="contact-label">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
