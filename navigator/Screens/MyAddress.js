import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import TitleBar from "../components/TitleBar";
import AddressComp from "../components/AddressComp";
import { useNavigation } from "@react-navigation/native";

const Address = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <TitleBar text="My Address" />
            <View style={styles.addressView}>
                <AddressComp />
                <AddressComp />
                <AddressComp />
                <AddressComp />
                <View style={styles.buttonCont}>
                    <TouchableOpacity onPress={() => navigation.navigate('Editaddresses')} style={styles.button}>
                        <Text style={styles.buttonText}>Add address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default Address;

const styles = StyleSheet.create({
    addressView: {
        flex: 1,
        top: '10%',
    },
    button: {
        backgroundColor: '#23A449',
        height: '20%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        top: '20%'
    },
    buttonCont: {
        flex: 2,
        alignItems: 'center',

    },
    buttonText: {
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        fontWeight: 'bold'
    }

});