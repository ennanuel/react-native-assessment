import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useContext, useMemo } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { CartContext } from "../../cartContext";

const Item = ({ id, name, price, images, navigation }) => {
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
                <Image source={require("../../assets/food.jpg")} style={styles.image} />
                <View style={styles.nameAndPriceContainer}>
                    <Text style={styles.nameAndPriceText}>{name}</Text>
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

const styles = StyleSheet.create({
    container: {
        minWidth: "42%",
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        gap: 10,
    },
    details: {
        gap: 10,
    },
    icon: {
        position: "absolute",
        top: 5,
        right: 5,
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 100,
        objectFit: "cover",
        borderRadius: 5
    },
    text: {
        color: "white",
    },
    price: {
        color: "red"
    },
    nameAndPriceContainer: {
        flexDirection: "row",
        gap: 15,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    nameAndPriceText: {
        fontSize: 18
    },
    addBtn: {
        minHeight: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        gap: 10,
        color: "white",
        backgroundColor: "red"
    }
});

export default Item