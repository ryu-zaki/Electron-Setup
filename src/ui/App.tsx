
import './App.css'
import AboutContainer from './custom components/AboutContainer'
import EducationalContainer from './custom components/EducationalContainer'
import Footer from './custom components/Footer'
import HeaderSection from './custom components/HeaderSection'
import InterestContainer from './custom components/InterestContainer'
import SkillsContainer from './custom components/SkillsContainer'
import VisionContainer from './custom components/VisionContainer'
import WebProjectsContainer from './custom components/WebProjectsContainer'

function App() {
  
  return (
    <div className="main-con">
  
      {/* <!-- Detailed Circled --> */}
       <img draggable="false" className="detailed-circle" src="detailed-circle.png" alt=""/>
       <img draggable="false" className="detailed-circle" src="detailed-circle.png" alt=""/>
      
      {/*  <!-- Blur Effect --> */}

       <img draggable="false" className="blur-effect first" src="blur effect.png" alt=""/>
       <img draggable="false" className="blur-effect second" src="blur effect.png" alt=""/>
        {/* <!-- Darkmode button --> */}

         <div className="darkmode-btn">
          <div className="clickable"></div>
            <div>
               <img src="theme/light-mode(active).png" alt=""/> 
            </div>

            <img src="theme/light-mode(inactive).png" alt=""/>
            <img src="theme/dark-mode(inactive).png" alt=""/>
         </div>

       <div className="inner-con">

        <HeaderSection />

        {/* <!-- Main Page and Contents --> */}
        <main className="sides-wrapper">
            {/* <!-- Left Side --> */}
            <section className="left-side">   
                {/* <!-- About Section --> */}
             <AboutContainer/>
             <InterestContainer />
             <SkillsContainer />
             <VisionContainer/>
            
            </section>

           {/*  <!-- Right Side --> */}
            <section className="right-side">
                <WebProjectsContainer />
                <EducationalContainer />
            </section>
        </main>
        </div>
        <Footer />
    </div>
  )
}

export default App
