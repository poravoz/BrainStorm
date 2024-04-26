import React, { CSSProperties, useContext, useEffect } from 'react';
import Delete from './icons/delete';
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

const ItemShoppingCart: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  const decreaseCount = (item: ItemProp) => {
    const updatedItems = products.map(product =>
      product.id === item.id && product.category === item.category ? { ...product, count: product.count - 1 } : product
    );
    updateCartItems(updatedItems);
  };

  const increaseCount = (item: ItemProp) => {
    const updatedItems = products.map(product =>
      product.id === item.id && product.category === item.category ? { ...product, count: product.count + 1 } : product
    );
    updateCartItems(updatedItems);
  };

  return (
    <>
      {products.map((item, index) => (
        <div className="item-shopping-cart">
          <img src={item.images[0]} className='image-item-sc' alt={item.id.toString()} />
          <div key={index} className='details-item-sc'>
            <p className='category-item-sc'>{item.category}</p>
            <p className='title-item-sc'>{item.title}</p>
          </div>
          <div className='container-count-item-sc'>
            <button className='change-count-item-sc' onClick={() => decreaseCount(item)} disabled={item.count <= 1}>-</button>
            <p className="count-item-sc">{item.count}</p>
            <button className='change-count-item-sc' onClick={() => increaseCount(item)}>+</button>
          </div>
          <p className='price-item-sc'>{item.price}</p>
          <Delete width='4vmin' height='4vmin' className='delete-item-from-cart-cs' onClick={() => removeFromCart(item.id, item.category)}/>
        </div>
      ))}
      
    </>
  )
}

export default ItemShoppingCart;