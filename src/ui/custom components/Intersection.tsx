import type { ReactElement } from "react";
import React from "react";



const Intersection = ({children} : { children: ReactElement }) => {

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

    return children
}


export default Intersection;