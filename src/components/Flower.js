import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to create an App.css file for your styles
import flower from '../images/flower_drawing.svg'
// FlowerComponent.js
export const Flower = ({ size, color }) => {
    const flowerStyle = {
        transform: `scale(${size})`,
        transition: 'all 2s ease', // This will animate the growth and withering
        color: color, // Change the color based on the state
    };

    return (
        <div style={flowerStyle}>
            {/* Render your flower SVG or image here with the given styles */}
            {/* You would replace the div below with your flower SVG */}
            <img src={flower} alt="flower" />
        </div>
    );
};
