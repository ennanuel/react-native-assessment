import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useMemo } from "react";
import { TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { ITEMS } from "../../constant";
import { CartContext } from "../../cartContext";
import MoreDetails from "./MoreDetails";
import CartActions from "./CartActions";
import ItemDetails from "./ItemDetails";
import { styles } from "../../assets/styles/singleItem";

const SingleItem = ({ navigation, route }) => {
    const { itemId } = route.params;
    const { cart } = useContext(CartContext);
    const { name, price, image, quantity: itemQuantity, totalQuantity } = useMemo(() => ITEMS.find(item => item.id === itemId) || {});
    const cartItem = useMemo(() => cart.find(item => item.id === itemId), [cart]);

    const goBack = () => {
        navigation.goBack()
    }

    if (!name) return goBack();

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={25} />
                </TouchableOpacity>
                <ItemDetails image={image} name={name} price={price} />
                <MoreDetails />
                <CartActions cartItem={cartItem} itemQuantity={itemQuantity} totalQuantity={totalQuantity} itemId={itemId} />
            </ScrollView>
        </SafeAreaView>
    )
};

export default SingleItem