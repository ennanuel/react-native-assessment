import React, { useEffect } from "react";
import { View } from "react-native";

const Home = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate("Items")
    })

    return (
        <View></View>
    )
}

export default Home;