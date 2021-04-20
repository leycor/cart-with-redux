import React, { useState } from 'react'

// Molecules
import Store from '../molecules/Store'
import Cart from '../molecules/Cart'
import { CartContext } from '../molecules/CartContext';

// Utils
import { products } from '../../utils/products';


const MainApp = () => {

    const [ cartState, setCartState ] = useState([])


    // Agrega un nuevo producto al carrito
    const handleAddProduct = ( product ) => {

        // Si el producto existe. Sumale la cantidad total y actualiza el precio
        const productValidation = cartState.find(cartProduct => cartProduct.id === product.id ) //Valida existencia de producto
        productValidation
        ?
        setCartState(()=> {
            const originalProduct = products.find(p => p.id === product.id) // Busco el producto original

            const newCartState = cartState.filter( cartProduct => {

                if(cartProduct.id === product.id){                  // Filtra y una vez encuentra el producto, actualiza los valores
                    cartProduct.quantity += 1
                    cartProduct.price = cartProduct.quantity *  originalProduct.price
                }

                return cartProduct // Retorna el nuevo array con valores actualizados
            })

            return newCartState // Actualiza el estado del array

        })

        :
        // Si no existe, agregarlo al carrito
        setCartState([...cartState, {id: product.id, name:product.name, quantity:1, price: product.price}])
    }

    // Remover producto
    const handleRemoveProduct = ( product ) => {

        // Si el producto existe. restale la cantidad total y actualiza el precio
        const productValidation = cartState.find(cartProduct => cartProduct.id === product.id ) //Valida existencia de producto
        productValidation
        &&
        setCartState(()=> {
            const originalProduct = products.find(p => p.id === product.id) // Busco el producto original

            const newCartState = cartState.filter( cartProduct => {

                if(cartProduct.id === product.id){                  // Filtra y una vez encuentra el producto, actualiza los valores
                    cartProduct.quantity -= 1
                    cartProduct.price = cartProduct.quantity *  originalProduct.price
                }

                return cartProduct // Retorna el nuevo array con valores actualizados
            })

            return newCartState // Actualiza el estado del array

        })
    }

    return(

        <CartContext.Provider value={{ cartState, handleAddProduct, handleRemoveProduct}}>
            <Store />
            <Cart />
        </CartContext.Provider>
    );
}

export default MainApp