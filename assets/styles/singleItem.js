import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    container: {
        paddingTop: 50,
        padding: 15,
    },
    backButton: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: "#bbbbbb",
        color: "#bbbbbb",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    imageContainer: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 5
    },
    image: {
        width: "100%",
        height: 250,
        objectFit: "cover"
    },
    imageButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        marginTop: 20
    },
    imageButton: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "red",
        shadowColor: "none"
    },
    imageButtonInactive: {
        backgroundColor: "#aaaaaa"
    },
    titlePriceContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15
    },
    titlePriceText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    title: {
        flex: 1
    },
    price: {
        color: "red",
    },
    description: {
        marginTop: 15
    },
    more: {
        color: "red"
    },
    moreInfoContainer: {
        marginTop: 40,
        borderTopWidth: 1,
        borderColor: "#cccccc"
    },
    moreInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    actionsContainer: {
        marginTop: 30,
        gap: 15
    },
    quantityContainer: {
        flexDirection: "row",
        paddingHorizontal: 15,
        gap: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    itemActionButton: {
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#aaaaaa"
    },
    disabledButton: {
        borderColor: "#dddddd",
        color: "#dddddd"
    },
    cartButton: {
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    },
    cartButtonText: {
        color: "white"
    },
    subscribeButton: {
        marginBottom: 60,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "red"
    },
    subscribeButtonText: {
        color: "red"
    }
});

module.exports = { styles };