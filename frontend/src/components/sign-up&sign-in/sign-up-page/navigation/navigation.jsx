import { useState, useContext, useEffect } from 'react';
import style from './navigation.module.css';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { ThemeContext } from '../../../../contexts/theme';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {
  const [nav, setNav] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  const handleToggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
  }, [location.pathname]);

  useEffect(() => {
    const isLightOnStored = localStorage.getItem("isLightOn") === "true";
    setIsLightOn(isLightOnStored);
  }, []);

  const handleToggleTheme = () => {
    const newIsLightOn = !isLightOn;
    setIsLightOn(newIsLightOn);
    localStorage.setItem('isLightOn', JSON.stringify(newIsLightOn));
    toggleTheme();
  }

  return (
    <div className={style.container_navigation}>
      <div className={style.box} style={{ backgroundColor: theme.backgroundColor_header, color: theme.color_header }}>
        <div className={style.logo}>
          <Link to="/"> Codito </Link>
        </div>
        <ul className={nav ? [style.menu, style.active].join(' ') : style.menu}
          style={{ backgroundColor: theme.backgroundColor_header, color: theme.color_header }}>
          <li>
            <div onClick={handleToggleTheme}>
              {isLightOn ?
                <FaRegLightbulb size={25} color='azure' className={style.icon_dark_theme} />
                :
                <FaLightbulb size={25} color='#05386b' className={style.icon_dark_theme} />}
            </div>
          </li>
          <li>
            <select value={i18n.language} onChange={(e) => handleToggleLanguage(e.target.value)}
              className={style.select_language}
              style={{ backgroundColor: theme.backgroundColor_header, color: theme.color_header }}>
              <option value="en">Eng</option>
              <option value="ua">Укр</option>
            </select>
          </li>
          <li>
            <Link to="/store"> {t("navigation.store")} </Link>
          </li>
          <li>
            <Link to="/login"> {t("navigation.sign_in")} </Link>
          </li>
        </ul>
        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
          {nav ? <AiOutlineClose size={25} style={{ color: theme.color_header }} />
            :
            <AiOutlineMenu size={25} style={{ color: theme.color_header }} />}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
