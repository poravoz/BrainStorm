import { configureStore } from "@reduxjs/toolkit"
import React, { CSSProperties, useContext } from 'react';
import NavigationBar from "./navigation/navigation";
import OptionsTechDevices from './options-tech-devices';
import PopularDevices from './popular-devices';
import ContentDevices from './content-devices';
import NewReleases from './new-releases';
import Footer from "../main-page/footer/footet";
import "../../styles/variables.css";
import { ThemeContext } from '../../contexts/theme';
import { RootState } from "../../reducers";


const Store = () => {
  const containerStyle: CSSProperties = {
    margin: '0 10vw'
  };

  const [{ theme }] = useContext(ThemeContext);
  // const { backgroundColor, textColor } = useSelector((state: RootState) => state.theme);

  return (
    // <div style={{backgroundColor, position: `relative`}}>
    <div style={{backgroundColor : theme.backgroundColor_store, position: `relative`}}>
      <div style={containerStyle}>
      <NavigationBar />
      <OptionsTechDevices />
      <PopularDevices />
      <ContentDevices />
      <NewReleases />
      </div>
      <Footer />
    </div>

  )
}

export default Store;