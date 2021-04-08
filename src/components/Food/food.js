import React, { useEffect, useState } from 'react';

const Food = ({food}) => {
const [price, setPrice] = useState([]);

const handleFoodCart = (food) => {
    const newCart = {...food};
    setPrice(newCart);
}

    return (
        <div className="card container mb-4" Style="width: 18rem;">
            <img className="pt-3" style={{height: '300px'}} src={food.imageURL} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <div className="container-fluid">
                    <div className="float-left"><h4 className="text-success">${food.price}</h4></div>
                    <div className="float-right"><button onClick={handleFoodCart} type="button" className="btn btn-success float-right">Buy Now</button></div>
                </div>
            </div>
        </div>

    );
};

export default Food;