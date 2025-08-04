import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import portfolioData from './data/source.json'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <Header personalInfo={portfolioData.personalInfo} />
        </section>
        <Skills skills={portfolioData.skills} />
        <Experience 
          workExperience={portfolioData.workExperience} 
          internships={portfolioData.internships} 
        />
        <Achievements 
          achievements={portfolioData.achievements} 
          education={portfolioData.education} 
        />
        <Contact contact={portfolioData.contact} />
      </main>
    </>
  )
}

export default App
