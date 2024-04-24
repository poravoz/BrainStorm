import React, {useState, useContext } from 'react';
import "./style.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

interface ItemProp {
  id: number;
  category: string;
  title: string;
  old_price: string;
  discount: string;
  price: string;
  popularity: number;
  images: string[];
}

// const DeviceDescription: React.FC<ItemProp> = ({ id, category, title, old_price, discount, price, popularity, images }) => {

const DeviceDescription = () => {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);

  return (
    <>
      <p className="device-name-description">{t("device-page.description")}</p>
    </>
  );
}

export default DeviceDescription;
