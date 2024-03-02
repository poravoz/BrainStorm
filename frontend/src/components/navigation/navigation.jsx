import { useState } from 'react';
import style from './navigation.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavigationBar = () => {
  const [nav, setNav] = useState(false);
  return (
      <div className={style.container}>
      <div className={style.box}>
        <div className={style.logo}>
          <a href=""> BrainStorm </a>
        </div>
        <ul
          className={nav ? [style.menu, style.active].join(' ') : [style.menu]}
        >
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
            <a href="">Login</a>
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
