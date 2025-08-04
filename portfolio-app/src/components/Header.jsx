import './Header.css';

const Header = ({ personalInfo }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="name">{personalInfo.name}</h1>
          <h2 className="title">{personalInfo.title}</h2>
          <p className="summary">{personalInfo.summary}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
