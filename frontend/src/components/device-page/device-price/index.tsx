import React, {useState, useContext, useEffect, useRef } from 'react';
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
  old_price: string;
  discount: string;
  price: string;
}

const DevicePrice: React.FC<ItemProp> = ({ id, category, old_price, discount, price }) => {
  const [t] = useTranslation("global");

  const [{ theme }] = useContext(ThemeContext);
  
  const [icon, setIcon] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        let loadedIcon = null;
        switch (category.toLowerCase().replace(/\s/g, '_')) {
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
            console.error('Invalid category:', category);
        }
        setIcon(loadedIcon);
      } catch (error) {
        console.error("Failed to load the icon:", error);
      }
    };

    fetchIcon();
  }, [category]);

  return (
    <div className="device-price">
      {icon}
      <div className="discountContainer-price">
        <span className="discount-price">-{discount}</span>
        <div className="priceContainer-price">
          <span className="oldprice-price">{old_price}</span>
          <span className="pricetag-price">{price}</span>
        </div>
      </div>
      <div className="buttons-price">
        <a href="#!" className="btn-price btnDownload-price">{t("store-page.buy_now")}</a>
        <a href="#!" className="btn-price btnWishlist-price">
          <div className="icon-add-to-washlist-price">+</div>
          <p className="add-to-washlist-price">{t("store-page.add_to_washlist")}</p>
        </a>
      </div>
    </div>
  );
}

export default DevicePrice;
