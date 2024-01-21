import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/components/Navigation";
import CartContextProvider from "./cartContext";

export default function App() {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <TabNavigation />
      </CartContextProvider>
    </NavigationContainer>
  )
};
