import React, {useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Monitor from './icons/monitor';
import Keyboard from './icons/keyboard';
import Mouse from './icons/mouse';
import MousePad from './icons/mouse_pad';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addProductSC, remProductSC, selectProductSC } from '../../../slices/shoping-cart-slice';

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

const DevicePrice: React.FC<{ product: ItemProp; }> = ({ product }) => {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);
  
  const [icon, setIcon] = useState<React.ReactNode | null>(null);

  let cartProducts = useAppSelector(selectProductSC)
  const dispatch = useAppDispatch();


  const handleAddToCart = () => {
    dispatch(addProductSC(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(remProductSC(product));
  };

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        let loadedIcon = null;
        switch (product.category.toLowerCase().replace(/\s/g, '_')) {
          case 'monitors':
            loadedIcon = <Monitor width="30vmin" height="20vmin" className="device-price-icon-class" />;
            break;
          case 'keyboards':
            loadedIcon = <Keyboard width="30vmin" height="20vmin" className="icon-class" />;
            break;
          case 'mice':
            loadedIcon = <Mouse width="30vmin" height="20vmin" className="icon-class" />;
            break;
          case 'mouse_pads':
            loadedIcon = <MousePad width="30vmin" height="20vmin" className="icon-class" />;
            break;
          default:
            console.error('Invalid category:', product.category);
        }
        setIcon(loadedIcon);
      } catch (error) {
        console.error("Failed to load the icon:", error);
      }
    };

    fetchIcon();
  }, [product.category]);

  const isInCart = cartProducts.some(item => item.product.id === product.id && item.product.category === product.category);

  return (
    <div className="device-price">
      {icon}
      <div className="discountContainer-price">
        <span className="discount-price">-{product.discount}</span>
        <div className="priceContainer-price">
          <span className="oldprice-price">{product.old_price}</span>
          <span className="pricetag-price">{product.price}</span>
        </div>
      </div>
      <div className="buttons-price">
        {isInCart ? (
          <Link 
            to="/device" 
            state={product}
            className="btn-price btnDownload-price" 
            onClick={handleRemoveFromCart}
          >
              {t("store-page.delete_form_cart")}
          </Link>
        ) : (
          <Link 
            to="/device" 
            state={product}
            className="btn-price btnDownload-price" 
            onClick={handleAddToCart}
          >
              {t("store-page.buy_now")}
          </Link>
        )}
      </div>
    </div>
  );
}

export default DevicePrice;
