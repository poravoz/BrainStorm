import React, { CSSProperties, useContext, useEffect } from 'react';
import DetailsCheckout from '../details-checkout';
import PlaceOrder from '../place-order';
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

// const WrapperCheckout: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const WrapperCheckout = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);


  return (
    <div className="wrapper-checkout-container">
      <div className='wrapper-checkout'>
        <div className='details-checkout'>
          <DetailsCheckout />
        </div>
        <div className="place-order-checkout">
          <PlaceOrder />
        </div>
      </div>
    </div>
  )
}

export default WrapperCheckout;