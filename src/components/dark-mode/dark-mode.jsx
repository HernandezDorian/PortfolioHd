import { useContext } from "react";
import "./dark-mode.css";
import { DarkModeContext } from "./DarkModeContext";
import darkImage from "./../../assets/dark.svg";
import lightImage from "./../../assets/light.svg";

export default function DarkMode() {
  const [switchDarkMode, setSwitchDarkMode] = useContext(DarkModeContext);

  const handleChange = (event) => {
    setSwitchDarkMode(event.target.checked);
  };

  return (
    <>
      <div className="darkMode">
        <div className="switch">
          <input
            onChange={handleChange}
            type="checkbox"
            id="darkModeSwitch"
            checked={switchDarkMode}
            className="visually-hidden"
          />
          <label htmlFor="darkModeSwitch" className="slider">
            <span className="visually-hidden">Switch to dark mode</span>
            <img
              src={switchDarkMode ? darkImage : lightImage}
              className="switch-image"
              alt="Switch"
            />
          </label>
        </div>
      </div>
    </>
  );
}
