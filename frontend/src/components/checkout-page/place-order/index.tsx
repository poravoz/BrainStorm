import React, { CSSProperties, useContext, useEffect } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import MyOrderCheckout from '../my-order-checkout';
import "./style.css";
import "../../../styles/variables.css";
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
  count: number;
}

// const PlaceOrder: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const PlaceOrder = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  let location = useLocation();


  return (
    <div className="place-order-container">
      <MyOrderCheckout />
      <div className="last-total-summary-container">
        <h2 className="h2-total-place-order">{t("checkout-page.total")}</h2>
        <p className="h2-total-place-order">{`$${(location.state.totalPrice.toFixed(2))}`}</p>
      </div>
      <div className='last-total-bottom-line'></div>
      <div className='container-button-my-order'>
          <Link 
            to="/store"
            className='button-my-order'
          >
              {t("checkout-page.place_order")}
          </Link>
      </div>
      <div className="terms-and-conditions-container">
        <p>Target’s terms and conditions page discusses its acceptable use policy across its website as well as mobile sites, services, applications, platforms, and tools that the U.S. retailer operates. 
        That’s a massive amount of businesses and operating units to cover, but it does its job very well.<br></br><br></br>
        The page is super detailed, but we like the jump links at the top for users to be able to navigate to a specific section. Other than that, it does the job as intended — 
        protecting Target from a legal perspective, while informing users of what they can or cannot do on the platform.</p>
      </div>
    </div>
  )
}

export default PlaceOrder;