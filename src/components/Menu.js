import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, TextInput, StyleSheet } from "react-native";
import ItemsList from "./ItemsList";
import { Feather } from "@expo/vector-icons";

const Menu = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (text) => setInputValue(text);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Feather name="search" style={styles.text} size={25} />
                    <TextInput
                        style={styles.input}
                        placeholder="Type something here..."
                        onChangeText={handleInputChange}
                        value={inputValue}
                    />
                </View>
                <ItemsList navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginHorizontal: 20,
        flexDirection: "row",
        gap: 10,
        borderWidth: 1,
        borderColor: "#aaaaaa",
        borderRadius: 5,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    text: {
        color: "#9d9d9d"
    },
    input: {
        flex: 1
    }
});

export default Menu