import { configureStore } from "@reduxjs/toolkit"
import React, { CSSProperties, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from "../../main-page/navigation/navigation";
import OptionsTechDevices from '../options-tech-devices';
import Footer from "../../main-page/footer/footet";
import monitors from "../../../data/monitors";
import keyboards from "../../../data/keyboards";
import mice from "../../../data/mice";
import mouse_pads from "../../../data/mouse_pads";
import "../../../styles/variables.css";
import "./style.css";
import { ThemeContext } from '../../../contexts/theme';
import { useAppSelector } from "../../../app/hooks";
import { selectProductsS } from "../../../slices/search-slice";
import ItemsCatalog from "../items-catalog";

const ContentCategory = () => {
  const containerStyle: CSSProperties = {
    margin: '0 10vw',
  };

  const [{ theme }] = useContext(ThemeContext);

  let location = useLocation();
  const { categoryName } = location.state.category;
  let wishListPtoducts = useAppSelector(selectProductsS)


  const category = () => {
    switch (location.state.category) {
      case "monitors":
        return <ItemsCatalog items={monitors} />
      case "keyboards":
        return <ItemsCatalog items={keyboards} />
      case "mice":
        return <ItemsCatalog items={mice} />
      case "mouse_pads":
        return <ItemsCatalog items={mouse_pads} />
      default:
        return <ItemsCatalog items={wishListPtoducts} />
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