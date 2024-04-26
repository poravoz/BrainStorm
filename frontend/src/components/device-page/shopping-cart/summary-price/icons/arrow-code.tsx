import React from 'react';
import '../style.css';
import "../../../../../styles/variables.css";

interface Props {
    width: string;
    height: string;
    className: string;
}

const ArrowCode: React.FC<Props> = ({ width, height, className }) => {
    return (
        <span className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
        </span>
    );
}

export default ArrowCode;