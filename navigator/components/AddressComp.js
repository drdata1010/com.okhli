import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddressComp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.addressContainer}>
            <View style={styles.addressData}>
                <Text style={styles.customerName}> Sourav Yadav</Text>
                <Text style={styles.addLine1}> 73-A Manoj Appartment</Text>
                <Text style={styles.addLine1}> Kasturba society</Text>
                <Text style={styles.addLine1}> Vishrantwadi Pune-411015</Text>
            </View>
            <View style={styles.threeDot}>
                <Image
                    style={styles.threeDotImage}
                    source={require("../assets/threeDot.png")}
                />
            </View>
        </View >
    )

}

export default AddressComp;

const styles = StyleSheet.create({
    addressContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F3F5F7',
        borderBottomWidth: 1,
    },
    addressData: {
        flex: 6,
        justifyContent: 'space-evenly',
        left: '5%'
    },
    threeDot: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    threeDotImage: {
        height: '20%',
        width: '30%'
    },
    customerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    addLine1: {
        fontSize: 15,

    }

});