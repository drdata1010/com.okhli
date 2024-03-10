import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TitleBar from '../components/TitleBar'
import InputFieldComp from '../components/InputCont'
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
const Userprofile = () => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={styles.profile}>
            <TitleBar text="Edit Profile" />
            <View style={styles.form}>
                <InputFieldComp place="Full Name" />
                <InputFieldComp place="Email" />
                <InputFieldComp place="Mobile Number" />
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
                    <Button />
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

    name: {
        flex: 1,
        borderBottomWidth: 1,
    },
    email: {
        flex: 1,
        borderBottomWidth: 1,
    },
    phone: {
        flex: 1,
        borderBottomWidth: 1,
    },
    ageGen: {
        flex: 1,
    },
    save: {
        flex: 4,
    },

    genCont: {
        flex: 1,
        // backgroundColor: 'red',
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
        // backgroundColor: 'red'
    },
    input: {
        left: '10%',

    },



});