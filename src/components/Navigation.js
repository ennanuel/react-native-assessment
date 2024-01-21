import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet } from 'react-native';
import Menu from './Menu';
import SingleItem from './SingleItem';
import Cart from './Cart';
import Home from './Home';
import Account from './Account';
import Header from './Header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MenuNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu} options={{
                header: ({ navigation, route }) => (
                    <Header navigation={navigation} route={route} showBackButton={false} hideScreenName={false} />
                )
            }} />
            <Stack.Screen name="Item" component={SingleItem} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "",
                tabBarInactiveTintColor: "",
                tabBarLabelStyle: {
                    fontSize: 15,
                    color: "#999999"
                },
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                header: ({ navigation, route }) => (
                    <Header navigation={navigation} route={route} showBackButton={false} hideScreenName={false} />
                ),
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "home" : "home-outline"}
                        size={25}
                        color={focused ? 'red' : '#aaaaaa'}
                    />
                )
            }} />
            <Tab.Screen name="Items" component={MenuNavigation} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "grid" : "grid-outline"}
                        size={25}
                        color={focused ? 'red' : '#aaaaaa'}
                    />
                )
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                header: ({ navigation, route }) => (
                    <Header showBackButton={true} hideScreenName={false} navigation={navigation} route={route} />
                ),
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "cart" : "cart-outline"}
                        size={25}
                        color={focused ? 'tomato' : '#aaaaaa'}
                    />
                )
            }} />
            <Tab.Screen name="Account" component={Account}  options={{
                header: ({ navigation, route }) => (
                    <Header navigation={navigation} route={route} showBackButton={true} hideScreenName={false} />
                ),
                tabBarIcon: ({ focused }) => (
                    <Image source={require("../../assets/profile_image.png")} style={styles.accountImage} />
                )
            }} />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    bottomNav: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderTopColor: "#9d9d9d",
        shadowColor: "transparent",
        backgroundColor: "white"
    },
    accountImage: {
        width: 25,
        height: 25,
        borderRadius: 25,
        objectFit: "cover",
        backgroundColor: "#cccccc"
    }
})

export default Navigation
