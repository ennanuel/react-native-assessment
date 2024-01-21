import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../assets/styles/cart"

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItemFromCart }) => {
    return (
        <View style={styles.itemContainer} key={item.id}>
            <Image style={styles.image} source={{ url: item.image }} />
            <View style={styles.detailsContainer}>
                <Text style={[styles.text1, styles.textBold]}>{item.name}</Text>
                <Text style={[styles.text1, styles.textBold, styles.price]}>$ {item.price}</Text>
                <TouchableOpacity onPress={() => removeItemFromCart(item.id)}><Feather name="trash" size={20} /></TouchableOpacity>
            </View>
            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={() => increaseQuantity(item.id)}>
                    <Feather name="plus" size={20} />
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity style={styles.actionButton} onPress={() => decreaseQuantity(item.id)}>
                    <Feather name="minus" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CartItem