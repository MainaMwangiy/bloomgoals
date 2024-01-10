import React from 'react';
import { useSpring, animated } from 'react-spring';

const Flower = ({ progress }) => {
    const style = useSpring({ transform: `scale(${progress})` });

    return <animated.div style={style} className="flower">🌸</animated.div>;
};
