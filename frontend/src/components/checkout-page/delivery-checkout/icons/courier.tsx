import React from 'react';
import '../style.css';
import "../../../../styles/variables.css";

interface Props {
    width: string;
    height: string;
    className: string;
}

const Courier: React.FC<Props> = ({ width, height, className }) => {
    return (
        <span className={className} >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 600 450"
                version="1"
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                viewBox="50 100 500 250"
                xmlSpace="preserve"
            >
                <path d="M397.2 188.8c0 6.7-5.6 12.4-12.3 12.4-3.3 0-6.4-1.4-8.7-3.7-2.3-2.3-3.6-5.4-3.7-8.7 0-6.6 5.7-12.3 12.4-12.3s12.3 5.7 12.3 12.3zm-2.1 19.4V272h-20.7v-63.8h20.7zm-148 32.1c0 18.9-14.4 33-33.1 33-18.8 0-33-14.1-33-33 0-19.1 14.2-33.4 33-33.4 18.7 0 33.1 14.2 33.1 33.4zm-45.8 0c0 7.5 5.4 13.1 12.7 13.1 7.4 0 12.8-5.6 12.8-13.1 0-7.8-5.4-13.5-12.8-13.5-7.3 0-12.7 5.7-12.7 13.5zm114.1 2c0 18.1-12.7 30.9-30.5 30.9-18 0-30.8-12.8-30.8-30.9v-34.2h20.7v34.2c0 6.7 3.9 11 10.1 11 6 0 10-4.3 10-11v-34.2h20.6v34.2zm51.1-15.7v-18.9c-2-.4-4-.6-6.1-.6-7 0-12.4 2.9-16.2 7.9v-6.7h-20.7V272h20.7v-29.5c0-12.2 7-16.7 15.7-16.7 2 0 4.1.4 6.3.7l.3.1zm54.6 18.8h45.5c.3-2.3.5-5.7.5-7.4 0-17.5-14.4-31.2-31.7-31.2-18.8 0-33.3 14.4-33.3 33 0 18.8 14.7 33.4 33.6 33.4 16.3 0 28.3-9.1 30.3-23.2h-20.3c-.9 3.5-4.4 6.1-10.6 6.1-7 .1-12.5-4.1-14-10.7zm13.3-21.7c5.6 0 10.5 3.5 11 8.7H422c2.2-6.1 6.7-8.7 12.4-8.7zm82.7-16v18.9l-.3-.1c-2.2-.4-4.3-.7-6.3-.7-8.7 0-15.7 4.5-15.7 16.7V272h-20.7v-63.8h20.7v6.7c3.8-5 9.2-7.9 16.2-7.9 2.1 0 4.1.3 6.1.7zm-341.8 12.6c0 .2-.1.4-.3.5-3.6 4.2-14.3 3.7-14.3 3.7-5.3 0-10.5-1.6-15-4.5s-8-7.1-10.1-12c-1.2-2.7-3.1-5.1-5.5-6.8-1.8-1.3-3.9-2.1-6.2-2.3 0 0-13.7-3.3-24.9 11.7-.1.1-.1.2-.1.3v.3c0 .1.1.2.2.3.1.1.2.2.3.2l2.7 1c1 .4 1.9 1 2.6 1.9.7.8 1.1 1.9 1.3 2.9l1 7.1c1.4 13 10.6 23.7 23.7 23.7 4.7 0 9.3-1.4 13.3-4 0 0 2.2-1.7 5.2-3.6 3.3-2.1 7-3.5 10.9-3.9 3.9-.5 7.8 0 11.5 1.3l1.9.7c.3.1.6.3.7.7.2.3.2.7.1 1-2.8 9.7-8.7 18.2-16.8 24.3-8.1 6.1-17.9 9.3-28 9.3-25-.1-46.1-21.1-46.3-46.1-.1-11.6 4.2-22.9 12-31.5 7.8-8.6 18.6-14 30.2-15.1 11.6-1.1 23.2 2.3 32.4 9.3 9.3 7.1 15.5 17.3 17.5 28.8v.8zm-61-13.3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c1.5-.1 2.7 1.2 2.7 2.7zm-2.1 16.8c.7 4.2 4 17.6 18.8 20.1h.1l.1-.1v-.1s0-.1-.1-.1c-3.4-1.6-12.4-6.8-18.6-19.8l-.1-.1h-.1s-.1 0-.1.1c0-.1 0 0 0 0z"></path>
            </svg>
        </span>
    );
}

export default Courier;