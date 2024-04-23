import React, {useState, useContext } from 'react';
import "./style.css";
import Rating from './reating-stars';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

interface ItemProp {
  id: number;
  category: string;
  title: string;
  popularity: number;
}

const BasicDeviceInformation: React.FC<ItemProp> = ({ id, category, title, popularity }) => {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);

  const [rating, setRating] = React.useState(0);
  

  return (
    <>
      <p className="device-name">{title}</p>
      <div className="popularity-container">
        <Rating 
          count={5}
          value={popularity}
          className="rating-stars"
        />
        <div className="number-popularity">
          <p className="popularity">{popularity}</p>
        </div>
        <p className="category-information">{category}</p>
      </div>
    </>
      
  );
}

export default BasicDeviceInformation;
