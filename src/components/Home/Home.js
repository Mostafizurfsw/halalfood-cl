import React, { useEffect, useState } from 'react';
import Food from '../Food/food';


const Home = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/food')
        .then(res => res.json())
        .then(data => setFood(data))
    }, [])

    return (
            <div className="row">
                {
                    food.map(food =><Food food={food}></Food>)
                }
            </div>
    );
};

export default Home;