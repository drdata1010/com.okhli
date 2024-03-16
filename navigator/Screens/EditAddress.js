import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TitleBar from '../components/TitleBar';
import InputFieldComp from '../components/InputCont';
import { TextInput } from 'react-native-gesture-handler';
import StatePicker from '../components/StatePicker';
import Button from '../components/Button';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import validator from 'validator';

const Editaddresses = ({ navigation, route }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [buildApart, setBuildApart] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [type, setType] = useState('');

    const [nameError, setNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const [buildApartError, setBuildApartError] = useState('');
    const [addressLine1Error, setAddressLine1Error] = useState('');
    const [addressLine2Error, setAddressLine2Error] = useState('');
    const [pincodeError, setPinCodeError] = useState('');
    const [typeError, setTypeError] = useState('');

    const isComingFromAddAddress = route.params?.isComingFromAddAddress || false;
    console.log(isComingFromAddAddress);
    const handleFullnameChange = (text) => {
        setName(text);
        console.log('This is current name', text)
        if (!isAlphabeticWithSpacesOnly(text)) {
            setNameError('Contains only alphabets and spaces');
        } else {
            setNameError('');
        }
    };
    const handleBuildingChange = (text) => {
        setBuildApart(text);
        if (!isAlphabeticWithSpacesOnly(text)) {
            setBuildApartError('Contains only alphabets and spaces');
        } else {
            setBuildApartError('');
        }
    };
    const handleAddress1Change = (text) => {
        setAddressLine1(text);
        if (!isAlphabeticWithSpacesOnly(text)) {
            setAddressLine1Error('Contains only alphabets and spaces');
        } else {
            setAddressLine1Error('');
        }
    };
    const handleAddress2Change = (text) => {
        setAddressLine2(text);
        if (!isAlphabeticWithSpacesOnly(text)) {
            setAddressLine2Error('Contains only alphabets and spaces');
        } else {
            setAddressLine2Error('');
        }
    };

    const handleMobileChange = (text) => {
        setPhoneNumber(text);
        if (!validator.isLength(text, { min: 10, max: 10 }) || !validator.isNumeric(text)) {
            setPhoneNumberError('Please enter a valid mobile number');
        }
        else {
            setPhoneNumberError('');
        }
    };
    const handlePincodeChange = (text) => {
        setPincode(text);
        if (!validator.isLength(text, { min: 6, max: 6 }) || !validator.isNumeric(text)) {
            setPinCodeError('Please enter a valid Pincode');
        }
        else {
            setPinCodeError('');
        }
    };
    const handleTypeChange = (text) => {
        setType(text);

    }
    const isAlphabeticWithSpacesOnly = (input) => {
        // Regular expression to match alphabetic characters and spaces only
        const alphabeticWithSpacesRegex = /^[a-zA-Z\s]+$/;

        return alphabeticWithSpacesRegex.test(input);
    };
    const handleAddress = async () => {
        console.log("reached address add");
        const address = {
            name: name,
            mobile: phoneNumber,
            buildApart: buildApart,
            addLine1: addressLine1,
            addLine2: addressLine2,
            pinCode: pincode,
            state: state,
            type: type,
        };
        const token = await AsyncStorage.getItem('authToken');
        const scKi = await AsyncStorage.getItem('scKi');
        try {
            const response = await fetch("http://192.168.1.35:8000/address", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token: token, scKi: scKi, address: address })
            });
            if (response.ok) {
                const data = await response.json()
                if (data.code === '203') {
                    Alert.alert(data.message);
                }
                if (data.code === '204') {
                    Alert.alert(data.message);
                }
                if (data.code === '205') {
                    await AsyncStorage.setItem("authToken", data.authToken);
                    navigation.replace('Home');
                }
                console.log('response data :', data.authToken)


            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error('Error  : ', error);
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <TitleBar title={isComingFromAddAddress ? "Add Address" : "Edit Address"} />
            <View style={styles.form}>
                <View style={styles.editaddressview}>
                    <View style={styles.phoneCont}>
                        <InputFieldComp place="Full Name"
                            value={name}
                            onChangeText={handleFullnameChange} />
                    </View>
                    {nameError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{nameError}</Text> : null}
                    <View style={styles.buildingCont}>
                        <InputFieldComp place="Building/Apartment" value={buildApart}
                            onChangeText={handleBuildingChange} />
                    </View>
                    {buildApartError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{buildApartError}</Text> : null}
                    <View style={styles.address1Cont}>
                        <InputFieldComp place="Address Line 1" value={addressLine1}
                            onChangeText={handleAddress1Change} />
                    </View>
                    {addressLine1Error ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{addressLine1Error}</Text> : null}
                    <View style={styles.address2Cont}>
                        <InputFieldComp place="Address Line 2" value={addressLine2}
                            onChangeText={handleAddress2Change} />
                    </View>
                    {addressLine2Error ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{addressLine2Error}</Text> : null}
                    <View style={styles.phoneCont}>
                        <InputFieldComp place="Mobile Number" value={phoneNumber}
                            onChangeText={handleMobileChange} />
                    </View>
                    {phoneNumberError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{phoneNumberError}</Text> : null}

                    <View style={styles.pinStateCont}>
                        <View style={styles.pinCont}>
                            <View style={styles.pinView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Pin Code"
                                    keyboardType="phone-pad"
                                    value={pincode}
                                    onChangeText={handlePincodeChange}
                                />
                            </View>

                        </View>
                        <View style={styles.type}>
                            <View style={styles.typeCont}>
                                <RNPickerSelect style={styles.gender}
                                    placeholder={{ label: 'Type', value: null }}
                                    placeholderTextColor="#23AA49"
                                    onValueChange={handleTypeChange}
                                    items={[
                                        { label: 'Home', value: 'h' },
                                        { label: 'Office', value: 'o' },
                                        { label: 'Friend', value: 'f' },
                                        { label: 'Family', value: 'ff' },

                                    ]}
                                />
                            </View>
                        </View>
                        <View style={styles.stateCont}>
                            <StatePicker onSelectState={setState} />
                        </View>
                    </View>
                    <View style={styles.saveCont} >
                        <TouchableOpacity style={styles.buttonCont} onPress={handleAddress}>
                            <Button />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.saveCont} >

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Editaddresses;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        top: '8%',
    },
    editaddressview: {
        flex: 1,
        top: '10%',
    },
    buildingCont: {
        flex: 1,

    },
    address1Cont: {
        flex: 1,

    },
    address2Cont: {
        flex: 1,

    },
    type: {
        flex: 4,
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    typeCont: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        height: '55%',
        justifyContent: 'center'
    },
    phoneCont: {
        flex: 1,

    },
    pinStateCont: {
        flex: 1,
        flexDirection: 'row',

    },
    saveCont: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonCont: {
        height: "26%",
        width: '70%',
        backgroundColor: '#23AA49',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pinCont: {
        flex: 3,
        backgroundColor: "white",
        alignSelf: 'center',
        borderRadius: 20,

        marginLeft: '5%'

    },
    stateCont: {
        flex: 5,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pinView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        height: '55%',
        justifyContent: 'center'
    },

});