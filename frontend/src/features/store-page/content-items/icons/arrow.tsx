import React from 'react';
import '../style.css';

interface Props {
    width: string;
    height: string;
    className: string;
}

const Arrow: React.FC<Props> = ({ width, height, className }) => {
    return (
        <span className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 5 9">
                <path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fillRule="evenodd"></path>
            </svg>
        </span>
    );
}

export default Arrow;