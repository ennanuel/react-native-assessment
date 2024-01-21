import React, { useEffect } from "react";
import { View } from "react-native";

const Account = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate("Items")
    });

    return (
        <View></View>
    )
}

export default Account;