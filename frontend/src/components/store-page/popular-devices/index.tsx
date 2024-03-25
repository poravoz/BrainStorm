import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import './style.css';

const StoreSlider = () => {
    const [t] = useTranslation("global");

    const newsData = [
        {
            _id: 1,
            title: "Monitor KNV",
            price: "$300",
            images: ["assets/popular-monitors.jpg"],
        },
        {
            _id: 2,
            title: "Keyboard KNV",
            price: "$100",
            images: ["assets/popular-keyboard.jpg"],
        },
        {
            _id: 3,
            title: "Mouse KNV",
            price: "$50",
            images: ["assets/popular-mouse.jpg"],
        },
        {
            _id: 4,
            title: "Mouse pad KNV",
            price: "$30",
            images: ["assets/popular-mouse-pads.jpg"],
        },
    ]

    const [counter, setCounter] = useState<number>(0);

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

    return (
        <div className="sliderWrapper">
            <div className="featured main-page" style={{ backgroundImage: `url(${newsData[counter].images[0]})` }}>
                <div className="itemText">
                    <h3 className="title-popular-device">{newsData[counter].title}</h3>
                    <p style={{color: `white`}}>{newsData[counter].price}</p>
                    <div className="buttons">
                        <a href="#!" className="btn btnDownload">{t("store-page.buy_now")}</a>
                        <a href="#!" className="btn btnWishlist">
                            <div className="icon-add-to-washlist">+</div>
                            <p className="add-to-washlist">{t("store-page.add_to_washlist")}</p>
                        </a>
                    </div>
                </div>
            </div>
            <ul className="gamelist">
                {newsData.map((game, index) => (
                    <li key={game._id} onClick={onClick} style={{ display: 'block' }} >
                        <div id={index.toString()} className={`game ${index === counter ? 'current' : ''}`}>
                            <div className="progress"></div>
                            <img src={game.images[0]} alt="game" />
                       { game.title.split(' ').slice(0, 4).join(' ') }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StoreSlider;