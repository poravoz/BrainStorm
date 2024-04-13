import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import ContentItems from '../content-items';
import Arrow from './icons/arrow';

const ContentDevices = () => {
    const [t] = useTranslation("global");

    const monitors = [
        {
            _id: 1,
            category: "Monitors",
            title: "Monitor 1",
            old_price: "$450",
            discount: "23%",
            price: "$350",
            images: ["assets/monitor1.jpg"],
        },
        {
            _id: 2,
            category: "Monitors",
            title: "Monitor 2",
            old_price: "$400",
            discount: "25%",
            price: "$300",
            images: ["assets/monitor2.jpg"],
        },
        {
            _id: 3,
            category: "Monitors",
            title: "Monitor 3",
            old_price: "$350",
            discount: "29%",
            price: "$250",
            images: ["assets/monitor3.jpg"],
        },
        {
            _id: 4,
            category: "Monitors",
            title: "Monitor 4",
            old_price: "$400",
            discount: "50%",
            price: "$200",
            images: ["assets/monitor4.jpeg"],
        },
        {
            _id: 5,
            category: "Monitors",
            title: "Monitor 5",
            old_price: "$300",
            discount: "33%",
            price: "$200",
            images: ["assets/monitor5.webp"],
        },
    ]

    const keyboards = [
        {
            _id: 1,
            category: "Keyboards",
            title: "Keyboard 1",
            old_price: "$450",
            discount: "23%",
            price: "$350",
            images: ["assets/keyboard1.webp"],
        },
        {
            _id: 2,
            category: "Keyboards",
            title: "Keyboard 2",
            old_price: "$400",
            discount: "25%",
            price: "$300",
            images: ["assets/keyboard2.jpg"],
        },
        {
            _id: 3,
            category: "Keyboards",
            title: "Keyboard 3",
            old_price: "$350",
            discount: "29%",
            price: "$250",
            images: ["assets/keyboard3.png"],
        },
        {
            _id: 4,
            category: "Keyboards",
            title: "Keyboard 4",
            old_price: "$400",
            discount: "50%",
            price: "$200",
            images: ["assets/keyboard4.webp"],
        },
        {
            _id: 5,
            category: "Keyboards",
            title: "Keyboard 5",
            old_price: "$400",
            discount: "50%",
            price: "$200",
            images: ["assets/keyboard5.jpg"],
        },
    ]

    const mice = [
        {
            _id: 1,
            category: "Mice",
            title: "Mouse 1",
            old_price: "$450",
            discount: "23%",
            price: "$350",
            images: ["assets/mouse1.webp"],
        },
        {
            _id: 2,
            category: "Mice",
            title: "Mouse 2",
            old_price: "$400",
            discount: "25%",
            price: "$300",
            images: ["assets/mouse2.jpg"],
        },
        {
            _id: 3,
            category: "Mice",
            title: "Mouse 3",
            old_price: "$350",
            discount: "29%",
            price: "$250",
            images: ["assets/mouse3.webp"],
        },
        {
            _id: 4,
            category: "Mice",
            title: "Mouse 4",
            old_price: "$400",
            discount: "50%",
            price: "$200",
            images: ["assets/mouse4.jpg"],
        },
    ]

    const mouse_pads = [
        {
            _id: 1,
            category: "Mouse Pads",
            title: "Mouse Pad 1",
            old_price: "$450",
            discount: "23%",
            price: "$350",
            images: ["assets/mouse-pad1.jpg"],
        },
        {
            _id: 2,
            category: "Mouse Pads",
            title: "Mouse Pad 2",
            old_price: "$400",
            discount: "25%",
            price: "$300",
            images: ["assets/mouse-pad2.webp"],
        },
        {
            _id: 3,
            category: "Mouse Pads",
            title: "Mouse Pad 3",
            old_price: "$350",
            discount: "29%",
            price: "$250",
            images: ["assets/mouse-pad3.webp"],
        },
        {
            _id: 4,
            category: "Mouse Pads",
            title: "Mouse Pads 4",
            old_price: "$400",
            discount: "50%",
            price: "$200",
            images: ["assets/mouse-pad4.webp"],
        },
    ]

    return (
        <div>
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.monitors")}</h2>
                <Arrow />
            </div>
            <ContentItems items={monitors} />
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.keyboards")}</h2>
                <Arrow />
            </div>
            <ContentItems items={keyboards} />
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.mice")}</h2>
                <Arrow />
            </div>
            <ContentItems items={mice}/>
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.mouse_pads")}</h2>
                <Arrow />
            </div>
            <ContentItems items={mouse_pads}/>
        </div>
        
    )
}

export default ContentDevices;