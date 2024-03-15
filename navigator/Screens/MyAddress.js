import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import TitleBar from "../components/TitleBar";
import AddressComp from "../components/AddressComp";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Address = () => {
    const navigation = useNavigation();
    const [address, setAddress] = useState('');
    const [fetched, setFetched] = useState(false)

    console.log("in my sddress");

    const fetchAddress = async () => {
        const token = await AsyncStorage.getItem('authToken');
        const scKi = await AsyncStorage.getItem('scKi');

        try {
            const response = await fetch("http://10.0.2.2:8000/myAddress", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token: token, scKi: scKi })
            });
            if (response.ok) {
                const data = await response.json()
                console.log('data is    :    ', data[0])
                setAddress(data);

            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error('Error  : ', error);
        }
    };
    if (!fetched) {
        fetchAddress();
        setFetched(true);
    }


    const handleEditAddress = () => {
        // Navigate to the "Edit Address" page and pass the parameter
        navigation.navigate('Editaddresses', { isComingFromAddAddress: true });
    };
    return (
        <View style={{ flex: 1 }}>
            <TitleBar title="My Address" />
            <View style={styles.addressView}>
                <AddressComp />
                <AddressComp />
                <AddressComp />
                <AddressComp />
                <View style={styles.buttonCont}>
                    <TouchableOpacity onPress={handleEditAddress} style={styles.button}>
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