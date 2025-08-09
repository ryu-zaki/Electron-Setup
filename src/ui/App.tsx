
import './App.css'
import { useDarkmode } from './contexts/DarkMode'
import AboutContainer from './custom components/AboutContainer'
import BackgroundDetails from './custom components/BackgroundDetails'
import DarkmodeButton from './custom components/DarkmodeButton'
import EducationalContainer from './custom components/EducationalContainer'
import Footer from './custom components/Footer'
import HeaderSection from './custom components/HeaderSection'
import InterestContainer from './custom components/InterestContainer'
import SkillsContainer from './custom components/SkillsContainer'
import VisionContainer from './custom components/VisionContainer'
import WebProjectsContainer from './custom components/WebProjectsContainer'

function App() {
  const {isDarkmode} = useDarkmode()

  console.log(isDarkmode);

  return (
    <div className={`components-wrapper ${isDarkmode && "dark"}`}>
<div className={`main-con`}>
  
       <BackgroundDetails />
       <DarkmodeButton />
       <div className="inner-con bg-red">

        <HeaderSection />
        <main className="sides-wrapper">
            
            <section className="left-side">   
                {/* <!-- About Section --> */}
             <AboutContainer/>
             <InterestContainer />
             <SkillsContainer />
             <VisionContainer/>
            </section>

          
            <section className="right-side">
                <WebProjectsContainer />
                <EducationalContainer />
            </section>
        </main>
        </div>
        <Footer />
    </div>
    </div>
    
  )
}

export default App
