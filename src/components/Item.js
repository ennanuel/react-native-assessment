import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useContext, useMemo } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { CartContext } from "../../cartContext";
import { styles } from "../../assets/styles/item.js";

const Item = ({ id, name, price, image, navigation }) => {
    const { cart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const isInCart = useMemo(() => cart.map(item => item.id).includes(id), [cart]);

    const add = () => { addItemToCart({ itemId: id, quantity: 1 }) };
    const remove = () => { removeItemFromCart(id); };
    const navigateToItem = () => {
        const itemId = id;
        navigation.navigate('Item', { itemId });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToItem} style={styles.details}>
                <Image source={{ url: image }} style={styles.image} />
                <View style={styles.nameAndPriceContainer}>
                    <Text style={styles.nameAndPriceText}>{name.length > 11? name.substr(0, 11) + '...' : name}</Text>
                    <Text style={[styles.price, styles.nameAndPriceText]}>$ {price}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <Feather name="heart" color="#909090" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={isInCart ? remove : add} style={styles.addBtn}>
                <AntDesign name="shoppingcart" size={20} style={styles.text} />
                <Text style={[styles.text]}>{isInCart ? "Remove from Cart" : "Add to Cart"}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Item