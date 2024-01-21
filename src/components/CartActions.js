import { View, Text, TouchableOpacity, Feather, StyleSheet } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../cartContext";

const CartActions = ({ increaseQuantity, itemQuantity, cartItem, itemId, totalQuantity }) => {
    const [quantity, setQuantity] = useState(1);
    const { increaseItemQuantity, decreaseItemQuantity, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const increaseQuantity = () => {
        if (cartItem) increaseItemQuantity({ itemId, quantity: 1 });
        else setQuantity(quantity + 1 > totalQuantity ? totalQuantity : quantity + 1);
    }

    const decreaseQuantity = () => {
        if (cartItem) decreaseItemQuantity({ itemId, quantity: 1 });
        else setQuantity(quantity - 1 <= 0 ? 1 : quantity - 1);
    }

    useEffect(() => {
        if (!cartItem) return;
        setQuantity(itemQuantity);
    }, [itemId, itemQuantity])

    return (
        
        <View style={styles.actionsContainer}>
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={[styles.itemActionButton, (quantity + 1 > totalQuantity ? styles.disabledButton : {})]} onPress={increaseQuantity}>
                    <Feather name="plus" size={20} />
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity style={[styles.itemActionButton, (quantity - 1 <= 0 ? styles.disabledButton : {})]} onPress={decreaseQuantity}>
                    <Feather name="minus" size={20} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => cartItem ? removeItemFromCart(itemId) : addItemToCart({ itemId, quantity })}
                style={styles.cartButton}
            >
                <Text style={styles.cartButtonText}>{cartItem ? "Remove from Cart" : "Add to Cart"}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeButtonText}>Subscribe to a Plan</Text>
            </TouchableOpacity>
        </View>
    )
};

export default CartActions;