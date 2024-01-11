import React from 'react';
import '../App.css';
import { ReactComponent as FlowerSVG } from '../images/flower_drawing.svg';

export const Flower = ({ size, color }) => {
    const flowerStyle = {
        transform: `scale(${size})`,
        transition: 'all 2s ease',
        color: color,
    };

    return (
        <FlowerSVG style={flowerStyle} />
    );
};
