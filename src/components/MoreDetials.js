import { View, Text, TouchableOpacity, StyleSheet, Ionicons } from '"react-native';
import React from 'react';

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