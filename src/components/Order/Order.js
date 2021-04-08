import React, { useContext } from 'react';
import { useParams } from 'react-router';
import {UserContext} from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { setPrice } = useParams();
    return (
        <div className='container'>
            <h1>Checkout : {loggedInUser.name} </h1>
            <table class="table table-hover mt-5">
                <thead>
                    <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>1</td>
                    <td>$200</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>1</td>
                    <td>$145</td>
                    </tr>
                    <tr>
                    <th colspan="2" scope="col">Total</th>
                    <th scope="col">{setPrice}</th>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-success float-right">Checkout</button>
        </div>
    );
};

export default Order;