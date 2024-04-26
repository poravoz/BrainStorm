import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { connect, useDispatch, useSelector } from 'react-redux'
import './style.css';
import { addProduct, remProduct, selectProduct } from './store-slider-slice';
import { Product } from './entities/entities';
import { useAppDispatch } from '../../../app/hooks';

const StoreSlider = () => {
    const [t] = useTranslation("global");

    const newsData = [
        {
            id: 1,
            name: "Monitor KNV",
            price: 300,
            category: "Monitors",
            images: ["assets/popular-monitors.jpg"],
        },
        {
            id: 2,
            name: "Keyboard KNV",
            price: 100,
            category: "Keyboards",
            images: ["assets/popular-keyboard.jpg"],
        },
        {
            id: 3,
            name: "Mouse KNV",
            price: 50,
            category: "Mouses",
            images: ["assets/popular-mouse.jpg"],
        },
        {
            id: 4,
            name: "Mouse pad KNV",
            price: 30,
            category: "Mouse pads",
            images: ["assets/popular-mouse-pads.jpg"],
        },
    ]

    const [counter, setCounter] = useState<number>(0);

    let wishListPtoducts = useSelector(selectProduct)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === newsData.length - 1) return setCounter(0);
            setCounter(counter + 1);
        }, 8000);

        return () => clearInterval(interval);
    }, [newsData.length, counter]);


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
        const {id, name, category, price, images} = newsData[counter];
        const product: Product = {
            id: id,
            name: name,
            category: category,
            price: price,
            images: images
        };

        const inWishList = isInWishList(product, wishListPtoducts); 

        if (!inWishList) {
            dispatch(addProduct(product));
        }
        else {
            dispatch(remProduct(product));
        }
    }

    function isInWishList(newProduct: Product, products: Product[]): boolean {
        const compareIdFunc = (product: Product) => product.id === newProduct.id;
        return  products.some(compareIdFunc);
    }

    return (
        <div className="sliderWrapper">
            <div className="featured main-page" style={{ backgroundImage: `url(${newsData[counter].images[0]})` }}>
                <div className="itemText">
                    <h3 className="title-popular-device">{newsData[counter].name}</h3>
                    <p style={{color: `white`}}>${newsData[counter].price}</p>
                    <div className="buttons">
                        <a href="#!" className="btn btnDownload">{t("store-page.buy_now")}</a>
                        <a onClick={ handleAddToWishList } href="#!" className="btn btnWishlist">
                            <div className="icon-add-to-washlist">
                                {isInWishList(newsData[counter], wishListPtoducts) ? "-" : "+"}
                            </div>
                            <p className="add-to-washlist">
                                {isInWishList(newsData[counter], wishListPtoducts) ? t("store-page.remove_from_washlist") : t("store-page.add_to_washlist")}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <ul className="gamelist">
                {newsData.map((game, index) => (
                    <li key={game.id} onClick={onClick} style={{ display: 'block' }} >
                        <div id={index.toString()} className={`game ${index === counter ? 'current' : ''}`}>
                            <div className="progress"></div>
                            <img src={game.images[0]} alt="game" />
                       {  game.name.split(' ').slice(0, 4).join(' ') }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StoreSlider;