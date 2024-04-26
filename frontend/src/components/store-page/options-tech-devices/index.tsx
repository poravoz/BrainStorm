import React, {useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import ShoppingCartSvg from './icons/shopping-cart-svg';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

const OptionsTechDevices = () => {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);
  

  return (
    <div className="primary-content-container">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito" />
      <div className="buttons-options">
        <div className="flex-row-with-gap">
          <div className="sb-example-3">
            <input className="search__input" type="text" placeholder="Search"/>
          </div>
          <div className="rounded-container-with-icons-and-text">
            <p className="options-description-text-style">{t("store-page.monitors")}</p>
          </div>
          <div className="rounded-container-with-icons-and-text">
            <p className="options-description-text-style">{t("store-page.keyboards")}</p>
          </div>
          <div className="rounded-container-with-icons-and-text">
            <p className="options-description-text-style">{t("store-page.mice")}</p>
          </div>
          {/* <div className="rounded-container-with-icons-and-text">
            <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.microphones")}</p>
          </div> */}
          {/* <div className="rounded-container-with-icons-and-text">
            <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.headphones")}</p>
          </div> */}
          <div className="rounded-container-with-icons-and-text">
            <p className="options-description-text-style">{t("store-page.mouse_pads")}</p>
          </div>
          {/* <div className="rounded-container-with-icons-and-text">
            <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.usb_hubs")}</p>
          </div> */}
        </div>
        <Link to='/cart' className="cart-btn offset">
          <ShoppingCartSvg width="4vmin" height='4vmin' color="white" className=''/>
        </Link>
      </div>
      
    </div>
  );
}

export default OptionsTechDevices;
