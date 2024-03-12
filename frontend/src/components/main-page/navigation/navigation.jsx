import { useState, useContext, useEffect } from 'react';
import style from './navigation.module.css';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { ThemeContext } from '../../../contexts/theme';
import { Link } from "react-router-dom";
import ModalLogin from '../modal-login/modal-login';

const NavigationBar = () => {
  const [nav, setNav] = useState(false);
  
  const [isLightOn, setIsLightOn] = useState(false);
  const [{ theme }, toggleTheme] = useContext(ThemeContext);

  const [modalActive, setModalActive] = useState(false);

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
            <Link to="/"> Codito </Link>
          </div>
          <ul className={nav ? [style.menu, style.active].join(' ') : style.menu} style={{ backgroundColor: theme.backgroundColor_header, color: theme.color_header }}>
            <li>
              <div onClick={handleToggleTheme}>
                {isLightOn ?
                  <FaRegLightbulb size={25} color='azure' className={style.icon_dark_theme} />
                  :
                  <FaLightbulb size={25} color='#05386b' className={style.icon_dark_theme} />}
              </div>
            </li>
            <li>
              <Link to="/store"> Store </Link>
            </li>
            <li>
            <Link to="/photos">Photos</Link>
            </li>
            <li>
              <button className={style.open_modal_window_navigation} style={{backgroundColor: theme.backgroundColor_header_button, color: theme.color_header_button}} onClick={() => setModalActive(true)}>Log in</button>
              <ModalLogin active={modalActive} setActive={setModalActive}> 
                  <div>
                    <div>
                      <h1> Log In </h1>
                      <form>
                        <input type="password" required placeholder="Name" className={style.input_navigation} /> <br />
                        <input type="email" required placeholder="Email" className={style.input_navigation} /> <br />
                        <input type="password" required placeholder="Password" className={style.input_navigation} /> <br />
                        <button className={style.button_register_navigation}>Registration</button>
                       </form>
                    </div>
                  </div>
              </ModalLogin>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} style={{ color: theme.color_header }} /> : <AiOutlineMenu size={25} style={{ color: theme.color_header }} />}
          </div>
        </div>
      </div>
  );
};

export default NavigationBar;
