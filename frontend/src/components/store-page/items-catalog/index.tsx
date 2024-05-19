import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import { useTranslation } from 'react-i18next';
import { addProductWL, remProductWL, selectProductWL } from '../../../slices/wishlist-slice';
import { Product } from '../entities/entities';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';

interface Props {
    items: Product[];
}

const ItemsCatalog: React.FC<Props> = ({ items }) => {
    const [t] = useTranslation("global");
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

    const wishListProducts = useSelector(selectProductWL);
    const dispatch = useAppDispatch();

    const handleMouseEnter = (title: string) => {
        setHoveredProduct(title);
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
    };

    function handleAddToWishList(e: React.MouseEvent<HTMLDivElement, MouseEvent>, product: Product) {
        const inWishList = isInWishList(product, wishListProducts);

        if (!inWishList) {
            dispatch(addProductWL(product));
        } else {
            dispatch(remProductWL(product));
        }
    }

    function isInWishList(newProduct: Product, products: Product[]): boolean {
        const compareIdFunc = (product: Product) => product.title === newProduct.title;
        return products.some(compareIdFunc);
    }

    return (
        <div>
            <section className="sales">
                {items.length === 0 ? (
                    <p className="no-items-message">Товарів не знайдено</p>
                ) : (
                    <ul className="saleslist">
                        {items.map((item, key) => (
                            <li
                                key={key}
                                className="card"
                                onMouseEnter={() => handleMouseEnter(item.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link to="/device" className="cardHeader" state={item}>
                                    <img src={item.images[0]} className='image-devices' alt="sales game" />
                                    <p className="text-category">{item.category}</p>
                                    <p className="text-title">{item.title}</p>
                                </Link>
                                {hoveredProduct === item.title && (
                                    <div className="icon-add-to-wishlist-for-item" onClick={(e) => handleAddToWishList(e, item)}>
                                        {isInWishList(item, wishListProducts) ? "-" : "+"}
                                    </div>
                                )}
                                <div className="cardFooter">
                                    <span className="discount">-{item.discount}</span>
                                    <div className="priceContainer">
                                        <span className="oldprice">{item.old_price}</span>
                                        <span className="pricetag">{item.price}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}

export default ItemsCatalog;
