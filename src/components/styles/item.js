import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        minWidth: "42%",
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        gap: 10,
    },
    details: {
        gap: 10,
    },
    icon: {
        position: "absolute",
        top: 5,
        right: 5,
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 100,
        objectFit: "cover",
        borderRadius: 5
    },
    text: {
        color: "white",
    },
    price: {
        color: "red"
    },
    nameAndPriceContainer: {
        flexDirection: "row",
        gap: 15,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    nameAndPriceText: {
        fontSize: 18
    },
    addBtn: {
        minHeight: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        gap: 10,
        color: "white",
        backgroundColor: "red"
    }
});

export { styles };