import React, {useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Monitor from './icons/monitor';
import Keyboard from './icons/keyboard';
import Mouse from './icons/mouse';
import MousePad from './icons/mouse_pad';
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

const DevicePrice: React.FC<{ cartItems: ItemProp[]; product: ItemProp; addToCart: (product: ItemProp) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, cartItems, product, addToCart }) => {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);
  
  const [icon, setIcon] = useState<React.ReactNode | null>(null);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id, product.category);
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

  const isInCart = cartItems.some(item => item.id === product.id && item.category === product.category);

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
        <a href="#!" className="btn-price btnWishlist-price">
          <div className="icon-add-to-washlist-price">+</div>
          <p className="add-to-washlist-price">{t("store-page.add_to_washlist")}</p>
        </a>
      </div>
    </div>
  );
}

export default DevicePrice;
