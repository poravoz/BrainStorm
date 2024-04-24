import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { connect, useDispatch, useSelector } from 'react-redux'
import './style.css';
import { addProduct, deleteProduct, getProducts, updateProduct } from './store-slider-api';
import { selectProducts, selectWishListProducts } from './store-slider-slice';
import { Product } from './entities/entities';
import { useAppDispatch } from '../../../app/hooks';

const StoreSlider = () => {
    const [t] = useTranslation("global");

    // const newsData = [
    //     {
    //         _id: 1,
    //         name: "Monitor KNV",
    //         price: 300,
    //         category: "Monitors",
    //         images: ["assets/popular-monitors.jpg"],
    //     },
    //     {
    //         _id: 2,
    //         name: "Keyboard KNV",
    //         price: 100,
    //         category: "Keyboards",
    //         images: ["assets/popular-keyboard.jpg"],
    //     },
    //     {
    //         _id: 3,
    //         name: "Mouse KNV",
    //         price: 50,
    //         category: "Mouses",
    //         images: ["assets/popular-mouse.jpg"],
    //     },
    //     {
    //         _id: 4,
    //         name: "Mouse pad KNV",
    //         price: 30,
    //         category: "Mouse pads",
    //         images: ["assets/popular-mouse-pads.jpg"],
    //     },
    // ]
    
    const dispatch = useAppDispatch();

    const [counter, setCounter] = useState<number>(0);

    let wishListProducts = useSelector(selectWishListProducts);
    let products = useSelector(selectProducts);

    useEffect(() => {
        
        if (products) {
            dispatch(getProducts());
        }
        
        const interval = setInterval(() => {
            if (counter === products.length - 1) return setCounter(0);
            setCounter(counter + 1);
        }, 8000);

        return () => clearInterval(interval);
    }, [products.length, counter, dispatch]);   


    const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const divElement = e.currentTarget.querySelector('div');
        if (divElement) {
            let value = parseInt(divElement.id);
            if (value !== counter) setCounter(value);
        }
    }

    // const handleAddToWishList = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    function handleAddToWishList(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        const aElement = e.currentTarget;
        const {_id, title, category, price, images, discount, old_price, popularity} = products[counter];
        const product: Product = {
            _id: _id,
            title: title,
            category: category,
            price: price,
            discount: discount,
            old_price: old_price,
            popularity: popularity,
            images: images
        };

        const inWishList = isInWishList(product, wishListProducts); 

        if (!inWishList) {
            // dispatch(addProduct(product));
        }
        else {
            // @todo implement asyncThunk
            //dispatch(remProduct(product));
        }
    }

    function isInWishList(newProduct: Product, products: Product[]): boolean {
        const compareIdFunc = (product: Product) => product._id === newProduct._id;
        return  products.some(compareIdFunc);
    }

    return (
        <>
         {
                products.length > 0 &&
        
        <div className="sliderWrapper">
               
                <div className="featured main-page" style={{ backgroundImage: `url(${products[counter].images[0]})` }}>
                    <div className="itemText">
                        <h3 className="title-popular-device">{products[counter].title}</h3>
                        <p style={{color: `white`}}>${products[counter].price}</p>
                        <div className="buttons">
                            <a href="#!" className="btn btnDownload">{t("store-page.buy_now")}</a>
                            <a onClick={ handleAddToWishList } href="#!" className="btn btnWishlist">
                                <div className="icon-add-to-washlist">
                                    {isInWishList(products[counter], wishListProducts) ? "-" : "+"}
                                </div>
                                <p className="add-to-washlist">
                                    {isInWishList(products[counter], wishListProducts) ? t("store-page.remove_from_washlist") : t("store-page.add_to_washlist")}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="gamelist">
                    {products.map((game, index) => (
                        <li key={game._id} onClick={onClick} style={{ display: 'block' }} >
                            <div id={index.toString()} className={`game ${index === counter ? 'current' : ''}`}>
                                <div className="progress"></div>
                                <img src={game.images[0]} alt="game" />
                        {  game.title.split(' ').slice(0, 4).join(' ') }
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        }
</>
                    
    )
}

export default StoreSlider;