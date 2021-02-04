
// Reacts
import React, { Fragment, useContext } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {

    const {cartState, handleRemoveProduct} = useContext(CartContext)

    return(

        cartState.length > 0
        ?
        <Fragment>
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartState.map( product => (
        
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}$</td>
                                <td><button onClick={()=> handleRemoveProduct(product) }>remove to cart</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p><strong>TOTAL:</strong>{cartState.reduce( (total,product)=> total + product.price,0)}$</p>
            <hr />
        </Fragment>
        :
        <Fragment>
            <h1>Cart</h1>
            <p>empty cart</p>
        </Fragment>
    );
}


export default Cart;