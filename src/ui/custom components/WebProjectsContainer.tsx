import React from "react";
import { useProjects, type ProjectType } from "../contexts/WebProjects"

const WebProjectsContainer = () => {
   
   const {projects} = useProjects();

   React.useEffect(() => {
    
    /* Intersection Observer */
    const projectBoxes = document.querySelectorAll('.web-projects-con > section');
    const observer = new IntersectionObserver((entries) => {
  
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
       entry.target.classList.add('active');
       return;
      }  
    })

    }, { threshold: .8 });

    projectBoxes.forEach((box) => {
      observer.observe(box);
       })

    }, [])

    return (
        <section>
                <h2 className="category-title">Recent Web Projects</h2>
                <div className="web-projects-con">
                 {
                 projects.map((data, index) => {
                    return <ProjectBox {...data} key={index} />
                 })
                }
                </div>
                
         </section>
    )
}

const ProjectBox = ({ imgSrc, title, category, url }: ProjectType) => {

   const hanldeUrl = () => {
      window.open(url, "_blank")
   }

   return (
      <section className="active">
            <div>
              <img src={imgSrc} alt=""/>
            </div>
             
            <div>
               <div>
                <h3>{title}</h3>
               <p>{category}</p>
               </div>

               <button onClick={hanldeUrl}><img src="rocket-lunch.png" alt=""/></button>
            </div>
       </section>
   )
}

export default WebProjectsContainer;