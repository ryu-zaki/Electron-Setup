import { useDarkmode } from "../contexts/DarkMode";

const DarkmodeButton = () => {
    const {setIsDarkmode} = useDarkmode();

    const handleThemeChange= () => {
       setIsDarkmode(prev => !prev);
    }

    return (
        <div className="darkmode-btn">
          <div onClick={handleThemeChange} className="clickable"></div>
            <div>
               <img src="theme/light-mode(active).png" alt=""/> 
            </div>

            <img src="theme/light-mode(inactive).png" alt=""/>
            <img src="theme/dark-mode(inactive).png" alt=""/>
         </div>
    )
}

export default DarkmodeButton;