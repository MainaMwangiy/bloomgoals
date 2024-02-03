import React from 'react';
import '../App.css';
import { ReactComponent as FlowerSVG } from '../images/flower_drawing.svg';

export const Flower = ({ className }) => {
    return (
        <FlowerSVG className={className} />
    );
};
