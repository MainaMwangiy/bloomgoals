import React, { useState, useEffect } from 'react';
import Flower from './Flower';

const Goal = ({ title }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(oldProgress => oldProgress < 1 ? oldProgress + 0.1 : 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>{title}</h3>
            <Flower progress={progress} />
        </div>
    );
};
