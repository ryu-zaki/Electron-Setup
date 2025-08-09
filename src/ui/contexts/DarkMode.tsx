import React, { type ReactElement } from "react";

interface DarmodeType {
  isDarkmode: boolean,
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}
const ComponentContext = React.createContext<DarmodeType | null>(null);
 

const DarkMode = ({ children }: { children: ReactElement }) => {
    
    const [isDarkmode, setIsDarkmode] = React.useState(false);

    return (
        <ComponentContext value={{ isDarkmode, setIsDarkmode }}>
          {
            children
          }
        </ComponentContext>
    )

}

export const useDarkmode = () => {
    return React.useContext(ComponentContext);
}


export default DarkMode;