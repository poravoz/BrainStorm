import React, { CSSProperties, useContext } from 'react';
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
  _id: number;
  category: string;
  title: string;
  old_price: string;
  discount: string;
  price: string;
  popularity: number;
  images: string[];
}

const Device = () => {
  let location = useLocation();
  const containerStyle: CSSProperties = {
    margin: '0 10vw'
  };

  const [{ theme }] = useContext(ThemeContext);

  return (
    <div style={{backgroundColor : theme.backgroundColor_store, position: `relative`}}>
      <div style={containerStyle}>
        <NavigationBar />
        <OptionsTechDevices />
        <DevicePrice 
          id={location.state._id} 
          category={location.state.category} 
          title={location.state.title} 
          old_price={location.state.old_price} 
          discount={location.state.discount} 
          price={location.state.price} 
          popularity={location.state.popularity} 
          images={location.state.images}
        />
        <DeviceDetails 
          id={location.state._id} 
          category={location.state.category} 
          title={location.state.title} 
          popularity={location.state.popularity} 
          images={location.state.images}
        />
        <DeviceDescription />
        <DeviceRecommendations 
          id={location.state._id} 
          category={location.state.category} 
        />
      </div>
      <Footer />
    </div>

  )
}

export default Device;