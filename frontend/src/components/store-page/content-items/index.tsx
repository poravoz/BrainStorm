import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import { useTranslation } from 'react-i18next';
import Arrow from './icons/arrow';
import { addProduct, remProduct, selectProduct } from '../store-page-slice';
import { Product } from '../entities/entities';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';

interface Props {
    items: Product[];
}

const ContentItems: React.FC<Props> = ({ items }) => {
    const [t] = useTranslation("global");
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [startIndex, setStartIndex] = useState(0);

    let wishListPtoducts = useSelector(selectProduct)
    const dispatch = useAppDispatch();

    const handleMouseEnter = (id: number) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNextClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    function handleAddToWishList(e: React.MouseEvent<HTMLDivElement, MouseEvent>, product: Product) {
        const inWishList = isInWishList(product, wishListPtoducts); 

        if (!inWishList) {
            dispatch(addProduct(product));
        }
        else {
            dispatch(remProduct(product));
        }
    }

    function isInWishList(newProduct: Product, products: Product[]): boolean {
        const compareIdFunc = (product: Product) => product.title === newProduct.title;
        return  products.some(compareIdFunc);
    }

    return (
        <div>
            <section className="sales">
                <div className="arrow-left" onClick={handlePrevClick}>
                    <Arrow width="2vmin" height='2vmin' className="arrow-span left"/>
                </div>
                <ul className="saleslist">
                    {items.slice(0, 4).map((item, index) => {
                        const itemIndex = (startIndex + index) % items.length;
                        const currentItem = items[itemIndex];
                        return (
                            <li
                                key={item.id} 
                                className="card"
                                onMouseEnter={() => handleMouseEnter(currentItem.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link to="/device" className="cardHeader" state={currentItem}>
                                    <img src={currentItem.images[0]} className='image-devices' alt="sales game" />
                                    <p className="text-category">{currentItem.category}</p>
                                    <p className="text-title">{currentItem.title}</p>
                                    
                                </Link>
                                {hoveredId === currentItem.id && <div className="icon-add-to-wishlist-for-item" onClick={(e) => handleAddToWishList(e, item)}>
                                    {isInWishList(item, wishListPtoducts) ? "-" : "+"}
                                </div>}
                                <div className="cardFooter">
                                    <span className="discount">-{currentItem.discount}</span>
                                    <div className="priceContainer">
                                        <span className="oldprice">{currentItem.old_price}</span>
                                        <span className="pricetag">{currentItem.price}</span>
                                    </div>
                                </div>
                            </li>
                         );
                    })}
                </ul>
                <div className="arrow-right" onClick={handleNextClick}>
                    <Arrow width="2vmin" height='2vmin' className="arrow-span"/>
                </div>
            </section>
        </div>
        
    )
}

export default ContentItems;