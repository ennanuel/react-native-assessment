import { Feather } from "@expo/vector-icons";
import React, { useContext, useMemo } from "react";
import { SafeAreaView, ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../../cartContext";

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
                        cart.map((item) => (
                            <View style={styles.itemContainer} key={item.id}>
                                <Image style={styles.image} />
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
                        ))
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

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    itemsContainer: {
        flex: 1,
        gap: 15,
        minHeight: '60%'
    },
    itemContainer: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 5,
        objectFit: "cover"
    },
    detailsContainer: {
        gap: 10,
        flex: 1
    },
    textBold: {
        fontWeight: "bold"
    },
    text: {
        fontSize: 25,
    },
    text1: {
        fontSize: 22,
    },
    price: {
        color: "red"
    },
    actionButtonsContainer: {
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center"
    },
    actionButton: {
        width: 30,
        height: 30,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
        marginVertical: 20
    },
    checkOutButton: {
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        marginBottom: 80
    },
    checkOutText: {
        color: "white"
    }
});

export default Cart