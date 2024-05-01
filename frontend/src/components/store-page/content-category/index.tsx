import { configureStore } from "@reduxjs/toolkit"
import React, { CSSProperties, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from "../../main-page/navigation/navigation";
import OptionsTechDevices from '../options-tech-devices';
import ContentItems from '../content-items';
import Footer from "../../main-page/footer/footet";
import monitors from "../../../data/monitors";
import keyboards from "../../../data/keyboards";
import mice from "../../../data/mice";
import mouse_pads from "../../../data/mouse_pads";
import "../../../styles/variables.css";
import "./style.css";
import { ThemeContext } from '../../../contexts/theme';


const ContentCategory = () => {
  const containerStyle: CSSProperties = {
    margin: '0 10vw'
  };

  const [{ theme }] = useContext(ThemeContext);

  let location = useLocation();
  const { categoryName } = location.state.category;


  const category = () => {
    switch (location.state.category) {
      case "monitors":
        return <ContentItems items={monitors} />
      case "keyboards":
        return <ContentItems items={keyboards} />
      case "mice":
        return <ContentItems items={mice} />
      case "mouse_pads":
        return <ContentItems items={mouse_pads} />
    }
  };

  return (
    <div style={{backgroundColor : theme.backgroundColor_store, position: `relative`}}>
      <div style={containerStyle}>
      <NavigationBar />
      <OptionsTechDevices />
      <div className="content-category-options">
        {category()}
      </div>
      </div>
      <Footer />
    </div>

  )
}

export default ContentCategory;