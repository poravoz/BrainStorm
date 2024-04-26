import React, { CSSProperties, useContext, useEffect } from 'react';
import ItemShoppingCart from '../item-shopping-cart';
import "./style.css";
import "../../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../contexts/theme';

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

const ItemsInCart: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void; addToCart: (product: ItemProp) => void }> = ({ removeFromCart, products, addToCart, updateCartItems }) => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  const itemCountText = products.length <= 1 ? `${products.length} item` : `${products.length} items`;

  return (
    <div className="items-sc">
      <div className='header-shopping-cart'>
        <h2 className="h2-shopping-cart">{t("store-page.shopping-cart")}</h2>
        <p className="count-items-sc">{itemCountText}</p>
      </div>
      <ItemShoppingCart
        products={products}
        updateCartItems={updateCartItems}
        removeFromCart={removeFromCart}
      />
    </div>
    
  )
}

export default ItemsInCart;