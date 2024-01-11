import { useEffect, useState } from "react";
import { Flower } from './Flower';
export const Goals = () => {
    const [milestone, setMilestone] = useState(0);
    const [flowerProps, setFlowerProps] = useState({
        size: 1,
        color: '#000', // start with default color black
    });

    useEffect(() => {
        if (milestone >= 5) {
            setFlowerProps({ size: 1.5, color: 'green' });
        } else if (milestone <= -5) {
            setFlowerProps({ size: 0.5, color: 'brown' });
        } else {
            setFlowerProps({ size: 1, color: 'red' });
        }
    }, [milestone]);

    // Function to simulate achieving a goal
    const achieveGoal = () => {
        setMilestone(milestone + 1);
    };

    // Function to simulate failing a goal
    const failGoal = () => {
        setMilestone(milestone - 1);
    };

    return (
        <div>
            <Flower size={flowerProps.size} color={flowerProps.color} />
            <button onClick={achieveGoal}>Achieve Goal</button>
            <button onClick={failGoal}>Fail Goal</button>
        </div>
    );
};