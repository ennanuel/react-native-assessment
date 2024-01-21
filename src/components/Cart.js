import { Feather } from "@expo/vector-icons";
import React, { useContext, useMemo } from "react";
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { CartContext } from "../../cartContext";
import { styles } from "../../assets/styles/cart"
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useContext(CartContext);
    const total = useMemo(() => cart.reduce((sum, item) => (item.price * item.quantity) + sum, 0).toFixed(2), [cart]);

    const increaseQuantity = (itemId) => increaseItemQuantity({ itemId, quantity: 1 });
    const decreaseQuantity = (itemId) => decreaseItemQuantity({ itemId, quantity: 1 })

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.itemsContainer}>
                    {
                        cart.map((item) => <CartItem item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItemFromCart={removeItemFromCart} />)
                    }
                </View>
                <View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.text}><Text style={styles.textBold}>Total </Text>({cart.length} {cart.length === 1 ? 'item' : 'items'})</Text>
                        <Text style={[styles.text, styles.textBold]}>$ {total}</Text>
                    </View>
                    <TouchableOpacity style={styles.checkOutButton}>
                        <Text style={[styles.text1, styles.checkOutText]}>Checkout - <Text style={styles.textBold}>$ {total}</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Cart