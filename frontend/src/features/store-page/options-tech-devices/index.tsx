import {useState, useContext } from 'react';
import "./style.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

function OptionsTechDevice() {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);

  return (
    <div className="primary-content-container">
      <div className="flex-row-with-gap">
        <div className="rounded-container-with-icons-and-text">
          <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.monitors")}</p>
        </div>
        <div className="rounded-container-with-icons-and-text">
          <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.keyboards")}</p>
        </div>
        <div className="rounded-container-with-icons-and-text">
          <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.mice")}</p>
        </div>
        <div className="rounded-container-with-icons-and-text">
          <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.microphones")}</p>
        </div>
        <div className="rounded-container-with-icons-and-text">
          <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.headphones")}</p>
        </div>
        <div className="rounded-container-with-icons-and-text">
          <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.mouse_pads")}</p>
        </div>
        <div className="rounded-container-with-icons-and-text">
          <p className="options-description-text-style" style={{color: theme.color_text_store}}>{t("store-page.usb_hubs")}</p>
        </div>
      </div>
    </div>
  );
}

export default OptionsTechDevice;
