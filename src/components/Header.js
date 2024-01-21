import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = ({ showBackButton, hideScreenName, navigation, route }) => {
    const goBack = () => { navigation.goBack() };

    return (
        <View style={styles.header}>
            {
                showBackButton &&
                <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Ionicons name="chevron-back" size={25} />
                </TouchableOpacity>
            }
            <Text style={styles.title}>{!hideScreenName && route.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        paddingTop: 50,
        borderBottomWidth: 1,
        gap: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#cccccc",
        backgroundColor: "white"
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 30
    },
    button: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#aaaaaa",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        marginRight: -60
    }
})

export default Header;