import React, {useState, useContext } from 'react';
import "./style.css";
import BasicDeviceInformation from '../basic-device-information';
import Arrow from './icons/arrow';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

interface ItemProp {
  id: number;
  category: string;
  title: string;
  popularity: number;
  images: string[];
}

const DeviceDetails: React.FC<ItemProp> = ({ id, category, title, popularity, images }) => {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
      setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  

  return (
    <div>
      <BasicDeviceInformation 
        id={id} 
        category={category} 
        title={title} 
        popularity={popularity} 
      />
      <img src={images[currentIndex]} className="device-image" alt={title} />
      <div className="device-slider">
        <div className="arrow-left-slider" onClick={handlePrevClick}>
          <Arrow width="4vmin" height='4vmin' className="arrow-span left"/>
        </div>
        <ul className="device-images">
          {Array.from({ length: 3 }).map((_, index) => {
            const imageIndex = (startIndex + index) % images.length;
            const currentImage = images[imageIndex];
            return (
                <li className="slider-image" 
                  onClick={() => handleThumbnailClick(imageIndex)}>
                  <img src={currentImage} className={`image-devices ${currentIndex === imageIndex ? "active-slider" : ""}`} alt={`${index}`} />
                </li>
              );
          })}
        </ul>
        <div className="arrow-right-slider" onClick={handleNextClick}>
            <Arrow width="4vmin" height='4vmin' className="arrow-span"/>
        </div>
      </div>
    </div>
  );
}

export default DeviceDetails;
