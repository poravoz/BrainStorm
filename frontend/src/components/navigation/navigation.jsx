import { useState, useContext, useEffect } from 'react';
import style from './navigation.module.css';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/theme';

const NavigationBar = () => {
  const [nav, setNav] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [{ theme }, toggleTheme] = useContext(ThemeContext);

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
      <div className={style.box} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div className={style.logo}>
          <a href=""> Wuzi </a>
        </div>
        <ul className={nav ? [style.menu, style.active].join(' ') : style.menu}>
          <li>
            <div onClick={handleToggleTheme}>
              {isLightOn ?
                <FaRegLightbulb size={25} color='#fff' />
               : 
                <FaLightbulb size={25} color='#05386b' />
              }
            </div>
          </li>
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">Our team</a>
          </li>
          <li>
            <a href="">Photos</a>
          </li>
          <li>
            <a href="">Log in</a>
          </li>
        </ul>
        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
          {nav ? <AiOutlineClose size={25} color='#05386b' /> : <AiOutlineMenu size={25} color='#05386b' />}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
