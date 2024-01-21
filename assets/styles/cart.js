import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    itemsContainer: {
        flex: 1,
        gap: 15,
        minHeight: '60%'
    },
    itemContainer: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 5,
        objectFit: "cover"
    },
    detailsContainer: {
        gap: 10,
        flex: 1
    },
    textBold: {
        fontWeight: "bold"
    },
    text: {
        fontSize: 25,
    },
    text1: {
        fontSize: 22,
    },
    price: {
        color: "red"
    },
    actionButtonsContainer: {
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center"
    },
    actionButton: {
        width: 30,
        height: 30,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
        marginVertical: 20
    },
    checkOutButton: {
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        marginBottom: 80
    },
    checkOutText: {
        color: "white"
    }
});

export { styles }