import React, { createContext, useState } from 'react';
import { ITEMS } from './constant';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [error, setError] = useState('');

    const addItemToCart = ({ itemId, quantity }) => {
        if (!itemId) return setError('Please select an item to add!');
        const newItem = ITEMS.find(item => item.id === itemId);

        if (!newItem) return setError('Item does not exist!');
        const itemAlreadyExistsInCart = cart.map(item => item.id).includes(newItem.id);

        if (itemAlreadyExistsInCart) return setError("Item is already in cart");
        if (newItem.totalQuantity < quantity) return setError("Item quantity is too much");

        newItem.quantity = quantity;
        setCart(prev => [...prev, newItem]);
    };

    const removeItemFromCart = (itemId) => {
        if (!itemId) setError('Please select an item to remove!');
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const increaseItemQuantity = ({ itemId, quantity = 1 }) => {
        const itemIndex = cart.findIndex(item => item.id === itemId);

        if (!itemIndex) return setError('Item not found');
        const cartItem = cart[itemIndex];
        const newQuantity = cartItem.quantity + quantity;
        
        if (cartItem.totalQuantity < newQuantity) return setError("Item quantity is too much");
        setCart(cart.map(item => item.id === itemId ? { ...cartItem, quantity: newQuantity } : item));
    };

    const decreaseItemQuantity = ({ itemId, quantity = 1 }) => {
        const itemIndex = cart.findIndex(item => item.id === itemId);

        if (!itemIndex) return setError('Item not found');
        const cartItem = cart[itemIndex];
        const newQuantity = cartItem.quantity - quantity;

        if (newQuantity <= 0) return setError("Item quantity cannot be less than or equal to zero");
        setCart(cart.map(item => item.id === itemId ? { ...cartItem, quantity: newQuantity } : item));
    };
  
    const clearError = () => setError('');
    
    return (
        <CartContext.Provider value={{
            cart,
            error,
            addItemToCart,
            removeItemFromCart,
            increaseItemQuantity,
            decreaseItemQuantity,
            clearError
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;