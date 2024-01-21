import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { styles } from "../../assets/styles/singleItem";

const MoreDetails = () => {
    return (
        <View style={styles.moreInfoContainer}>
            <View>
                <TouchableOpacity style={styles.moreInfo}>
                    <Text>Ingredients</Text>
                    <Ionicons name="chevron-down" size={20} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.moreInfo}>
                    <Text>Nutritional Information</Text>
                    <Ionicons name="chevron-down" size={20} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.moreInfo}>
                    <Text>How to Prepare</Text>
                    <Ionicons name="chevron-down" size={20} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.moreInfo}>
                    <Text>Dietry Information</Text>
                    <Ionicons name="chevron-down" size={20} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.moreInfo}>
                    <Text>Extra</Text>
                    <Ionicons name="chevron-down" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default MoreDetails