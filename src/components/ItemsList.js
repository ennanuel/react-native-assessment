import React from 'react';
import { View,  StyleSheet } from "react-native";
import { ITEMS } from '../../constant';
import Item from './Item';

const ItemsList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {
                ITEMS.map((item) => <Item navigation={navigation} {...item} key={item.id} />)
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 15,
        padding: 15
    }
})

export default ItemsList