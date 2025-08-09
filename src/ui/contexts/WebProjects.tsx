import React, { type ReactElement } from "react";
export interface ProjectType {
   imgSrc: string,
   title: string, category: string, url: string
}

interface ProjectContextType {
   projects: ProjectType[]
}

const ComponentContext = React.createContext<ProjectContextType>({ projects: [{title: "", category: "", url: "", imgSrc: ""}]});

const WebProjects = ({ children }: { children: ReactElement }) => {
    
    const [projects, setProjects] = React.useState<ProjectType[]>([]);

    React.useEffect(() => {
        setProjects([
            {title: "Comfoody", category: "E-commerce Website", url: "https://comfoody.onrender.com/", imgSrc: "Projects/comfoody.png"},
            {title: "Raztapahan", category: "Franchising Website", url: "https://raztapahan-static.onrender.com/", imgSrc: "Projects/raztapahan.png"},
            {title: "Balai Mario", category: "E-commerce Website", url: "https://balai-mario.onrender.com/", imgSrc: "Projects/balai mario.png"},
        ])
    }, [])

    return <ComponentContext value={{ projects }}>
        {
            children
        }
    </ComponentContext>
}

export const useProjects = () => {
    return React.useContext(ComponentContext);
}


export default WebProjects;