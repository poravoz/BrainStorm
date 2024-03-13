import { useState, useContext, useEffect, useRef } from 'react';
import style from './navigation.module.css';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { ThemeContext } from '../../../contexts/theme';
import { Link } from "react-router-dom";
import ModalLogin from '../modal-login/modal-login';

import { GrAccessibility } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {
  const [nav, setNav] = useState(false);

  const [isLightOn, setIsLightOn] = useState(false);
  const [{ theme }, toggleTheme] = useContext(ThemeContext);

  const [modalActive, setModalActive] = useState(false);
  const [t, i18n] = useTranslation("global");
  const top = () => { window.scrollTo(0, 0) }


  const scrollToPosition = (position) => {
    window.scrollTo(0, position);
  }
  const scrollToOurTeam = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1470) {
      scrollToPosition(1450);
    } else if (screenWidth <= 1470) {
      scrollToPosition(1250);
    } else if (screenWidth <= 1250) {
      scrollToPosition(1150);
    } else if (screenWidth <= 1200) {
      scrollToPosition(1400);
    }
  };

  const handleToggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  useEffect(() => {
    const isLightOnStored = localStorage.getItem("isLightOn") === "true";
    setIsLightOn(isLightOnStored);
  }, []);

  const handleToggleTheme = () => {
    const newIsLightOn = !isLightOn;
    setIsLightOn(!isLightOn);
    localStorage.setItem('isLightOn', JSON.stringify(newIsLightOn));
    toggleTheme();
  }

  return (
    <div className={style.container_navigation}>
      <div className={style.box} style={{ backgroundColor: theme.backgroundColor_header, color: theme.color_header }}>
        <div className={style.logo}>
          <Link onClick={top} to="/"> Codito </Link>
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
            <select onChange={(e) => handleToggleLanguage(e.target.value)}
              className={style.select_language}
              style={{ backgroundColor: theme.backgroundColor_header, color: theme.color_header }}>
              <option value="en">Eng</option>
              <option value="ua">Укр</option>
            </select>
          </li>
          <li>
            <a onClick={scrollToOurTeam} className={style.link_our_team}> {t("navigation.our_team")} </a>
          </li>
          <li>
            <Link to="/store"> {t("navigation.store")} </Link>
          </li>
          <li>
            <Link to="/photos"> {t("navigation.photos")} </Link>
          </li>
          <li>
            <button className={style.open_modal_window_navigation}
              style={{ backgroundColor: theme.backgroundColor_header_button, color: theme.color_header_button }}
              onClick={() => setModalActive(true)}>{t("navigation.text_button")}</button>

            <ModalLogin active={modalActive} setActive={setModalActive}>
              <div style={{ backgroundColor: theme.backgroundColor_header }}>
                <h1 className={style.login_text}> {t("navigation.text_button")} </h1>
                <form>
                  <GrAccessibility size={20} className={style.mdName_navigation} style={{ color: theme.color_icon_navigation }} />
                  <p className={style.navigation_name}
                    style={{ color: theme.color_header }}>{t("navigation.text_up_placeholder_email")}</p>

                  <input type="text" required placeholder={t("navigation.placeholder_name")}
                    className={style.input_navigation}
                    style={{ backgroundColor: theme.backgroundColor_header_input, color: theme.color_header_input }} /> <br />

                  <MdEmail size={20} className={style.mdEmail_navigation}
                           style={{ color: theme.color_icon_navigation }} />

                  <p className={style.navigation_email} 
                      style={{ color: theme.color_header }}>{t("navigation.text_up_placeholder_password")}</p>

                  <input type="email" required placeholder={t("navigation.placeholder_email")} 
                        className={style.input_navigation} 
                        style={{ backgroundColor: theme.backgroundColor_header_input, color: theme.color_header_input }} /> <br />

                  <Icon onClick={handleToggle} 
                        className={style.mdPassword_navigation} icon={icon} size={20} 
                        style={{ color: theme.color_icon_navigation }} />

                  <p className={style.navigation_password} 
                     style={{ color: theme.color_header }}>{t("navigation.text_up_placeholder_password")}</p>

                  <input required placeholder={t("navigation.placeholder_password")} 
                         className={style.input_navigation} 
                         style={{ backgroundColor: theme.backgroundColor_header_input, color: theme.color_header_input }} 
                         type={type} value={password} onChange={(e) => setPassword(e.target.value)} /> <br />

                  <button className={style.button_register_navigation} 
                          style={{ 
                                    backgroundColor: theme.backgroundColor_header_button, color: theme.color_header_button 
                                }}> Registration </button>
                </form>
              </div>
            </ModalLogin>
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
