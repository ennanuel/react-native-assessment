import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../assets/styles/singleItem";

const ItemDetails = ({ image, name, price }) => {
    return (
        <>
            <View>
                <View style={styles.imageContainer}>
                    <Image source={{ url: image}} style={styles.image} />
                </View>
                <View style={styles.imageButtonsContainer}>
                    <TouchableOpacity style={styles.imageButton} />
                    <TouchableOpacity style={[styles.imageButton, styles.imageButtonInactive]} />
                    <TouchableOpacity style={[styles.imageButton, styles.imageButtonInactive]} />
                </View>
            </View>
            <View style={styles.titlePriceContainer}>
                <Text style={[styles.titlePriceText, styles.title]}>{name}</Text>
                <Text style={[styles.titlePriceText, styles.price]}>$ {price}</Text>
            </View>
            <Text style={styles.description}>
                <Text>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum...</Text>
                <Text style={styles.more}>Read more</Text>
            </Text>
        </>
    )
};

export default ItemDetails