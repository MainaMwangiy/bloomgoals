import { useEffect, useState } from "react";
import { Flower } from './Flower';

export const Goals = () => {
    const [goalCount, setGoalCount] = useState(0);
    const [status, setStatus] = useState('normal');

    useEffect(() => {
        if (goalCount > 0) {
            setStatus('achieved');
        } else if (goalCount < 0) {
            setStatus('failed');
        } else {
            setStatus('normal');
        }
    }, [goalCount]);

    const achieveGoal = () => {
        setGoalCount(prevCount => prevCount + 1);
    };

    const failGoal = () => {
        setGoalCount(prevCount => prevCount - 1);
    };

    const getScale = () => {
        return 1 + Math.abs(goalCount) * 0.1;
    };

    return (
        <div>
            <Flower className={`flower-${status}`} style={{ transform: `scale(${getScale()})` }} />
            <div className="p-11">
                <div className="pb-10">
                    <button className="bg-indigo-600 px-10 py-5 text-xl text-white  uppercase tracking-wildest hover:bg-indigo-500 rounded-full" onClick={achieveGoal}>Achieve Goal</button>
                </div>
            </div>
            <div class="mt-10">
                <button type="submit" class="bg-indigo-600 px-10 py-5 text-center text-xl uppercase rounded-full font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={failGoal}>Fail Goal</button>
            </div>
        </div>
    );
};