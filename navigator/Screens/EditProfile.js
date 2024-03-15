import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TitleBar from '../components/TitleBar'
import InputFieldComp from '../components/InputCont'
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
import validator from 'validator';
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Userprofile = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const [nameError, setNameError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [ageError, setAgeError] = useState('');
    const token = AsyncStorage.getItem('authToken');
    const scKi = AsyncStorage.getItem('scKi');

    const handleEditProfile = async () => {
        try {
            const response = await fetch("http://10.0.2.2:8000/editProfile", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token, scKi, name, email, mobile, gender, age })
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
                    await AsyncStorage.setItem("scKi", data.scKi);
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

    const isAlphabeticWithSpacesOnly = (input) => {
        // Regular expression to match alphabetic characters and spaces only
        const alphabeticWithSpacesRegex = /^[a-zA-Z\s]+$/;

        return alphabeticWithSpacesRegex.test(input);
    };

    const handleNameChange = (text) => {
        setName(text);
        console.log('This is current name', text)
        if (!isAlphabeticWithSpacesOnly(text)) {
            setNameError('Contains only alphabets and spaces');
        } else {
            setNameError('');
        }
    };

    const handleMobileChange = (text) => {
        setMobile(text);
        if (!validator.isLength(text, { min: 10, max: 10 }) || !validator.isNumeric(text)) {
            setMobileError('Please enter a valid mobile number');
        }
        else {
            setMobileError('');
        }
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        if (!validator.isEmail(text)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    return (
        <View style={styles.profile}>
            <TitleBar title="Edit Profile" />
            <View style={styles.form}>
                <InputFieldComp place="Full Name" value={name}
                    onChangeText={handleNameChange} />
                {nameError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{nameError}</Text> : null}
                <InputFieldComp place="Email" value={email}
                    onChangeText={handleEmailChange} />
                {emailError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{emailError}</Text> : null}
                <InputFieldComp place="Mobile Number" value={mobile}
                    onChangeText={handleMobileChange} />
                {mobileError ? <Text style={{ marginTop: '-3%', marginLeft: '8%', color: 'red', fontSize: 11 }}>{mobileError}</Text> : null}
                <View style={styles.agegenCont}>
                    <View style={styles.genCont}>
                        <View style={styles.genInnerCont}>
                            <RNPickerSelect style={styles.gender}
                                placeholder={{ label: 'Gender', value: null }}
                                placeholderTextColor="#23AA49"
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Male', value: 'm' },
                                    { label: 'Female', value: 'f' },

                                ]}
                            />
                        </View>
                    </View>
                    <View style={styles.age}>
                        <View style={styles.ageInnerCont}>
                            <TextInput style={styles.input}
                                placeholder="Age" />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonCont}>
                    <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
                        <Text style={styles.textStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Userprofile;

const styles = StyleSheet.create({
    agegenCont: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonCont: {
        flex: 4,
    },
    form: {
        flex: 1,
        top: '20%',
    },
    profile: {
        flex: 1,
        backgroundColor: '#F3F5F7',
    },
    genCont: {
        flex: 1,
        justifyContent: 'center'
    },
    genInnerCont: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        height: '55%',
        justifyContent: 'center'
    },
    ageInnerCont: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '60%',
        alignSelf: 'center',
        height: '55%',
        justifyContent: 'center'
    },
    age: {
        justifyContent: 'center',
        flex: 1,
        right: '-20%'
    },
    input: {
        left: '10%',

    },
    textStyle: {
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#23AA49',
        height: '15%',
        width: '75%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        top: '10%'
    }



});