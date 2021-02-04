
// Reacts
import React, { Fragment, useContext } from 'react';

// Utilis
import { products } from '../../utils/products';

// Context
import { CartContext } from './CartContext';

const Store = () => {


    const { handleAddProduct }= useContext(CartContext)

    return(

        <Fragment>
            <h1>Store</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map( product => (
        
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}$</td>
                                <td><button onClick={ ()=> handleAddProduct(product) }>add to cart</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <hr />
        </Fragment>
        
    );


}


export default Store;