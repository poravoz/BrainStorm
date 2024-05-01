import React, { CSSProperties, useContext, useEffect } from 'react';
import { useLocation } from "react-router";
import NavigationBar from "../main-page/navigation/navigation";
import OptionsTechDevices from '../store-page/options-tech-devices';
import DeviceDetails from './device-details';
import DeviceDescription from './device-description';
import DeviceRecommendations from './device-recommendations';
import DevicePrice from './device-price';
import Footer from "../main-page/footer/footet";
import "../../styles/variables.css";
import { ThemeContext } from '../../contexts/theme';

interface ItemProp {
  id: number;
  category: string;
  title: string;
  old_price: string;
  discount: string;
  price: string;
  popularity: number;
  images: string[];
  count: number;
}

const Device = () => {
  let location = useLocation();
  const containerStyle: CSSProperties = {
    margin: '0 10vw'
  };

  const [{ theme }] = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{backgroundColor : theme.backgroundColor_store, position: `relative`}}>
      <div style={containerStyle}>
        <NavigationBar />
        <OptionsTechDevices />
        <DevicePrice 
          product={location.state}
          />
        <DeviceDetails 
          id={location.state.id} 
          category={location.state.category} 
          title={location.state.title} 
          popularity={location.state.popularity} 
          images={location.state.images}
        />
        <DeviceDescription />
        <DeviceRecommendations 
          id={location.state.id} 
          category={location.state.category} 
        />
      </div>
      <Footer />
    </div>
  )
}

export default Device;