import { useState, useContext, useEffect } from 'react';
import style from './navigation.module.css';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { ThemeContext } from '../../../contexts/theme';

import { Link } from 'react-router-dom';

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
      <div className={style.box} style={{ backgroundColor: theme.backgroundColor_header, color: theme.color_header }}>
        <div className={style.logo}>
          <a href=""> Codito </a>
        </div>
        <ul className={nav ? [style.menu, style.active].join(' ') : style.menu} style={{backgroundColor: theme.backgroundColor_header, color: theme.color_header}}>
          <li>
            <div onClick={handleToggleTheme}>
              {isLightOn ?
                <FaRegLightbulb size={25} color='azure' />
               : 
                <FaLightbulb size={25} color='#05386b' />
              }
            </div>

          </li>
          <li>
            <Link to="store"> Store </Link>
          </li>
          <li>
            <a href="">Photos</a>
          </li>
          <li>
            <a href="">Log in</a>
          </li>
        </ul>
        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
          {nav ? <AiOutlineClose size={25} style={{color: theme.color_header}}/> : <AiOutlineMenu size={25} style={{color: theme.color_header}}/>}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
