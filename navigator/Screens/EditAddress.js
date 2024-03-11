import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TitleBar from '../components/TitleBar';
import InputFieldComp from '../components/InputCont';
import { TextInput } from 'react-native-gesture-handler';
import StatePicker from '../components/StatePicker';
import Button from '../components/Button';

const Editaddresses = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <TitleBar text="Edit Address" />
            <View style={styles.form}>
                <View style={styles.editaddressview}>
                    <View style={styles.buildingCont}>
                        <InputFieldComp place="Building/Apartment" />
                    </View>
                    <View style={styles.address1Cont}>
                        <InputFieldComp place="Address Line 1" />
                    </View>
                    <View style={styles.address2Cont}>
                        <InputFieldComp place="Address Line 2" />
                    </View>
                    <View style={styles.phoneCont}>
                        <InputFieldComp place="Mobile Number" />
                    </View>
                    <View style={styles.pinStateCont}>
                        <View style={styles.pinCont}>
                            <View style={styles.pinView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Pin Code"
                                    keyboardType="phone-pad"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>
                        <View style={styles.stateCont}>
                            <StatePicker />
                        </View>
                    </View>
                    <View style={styles.saveCont}>
                        <Button />
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
    phoneCont: {
        flex: 1,

    },
    pinStateCont: {
        flex: 1,
        flexDirection: 'row',

    },
    saveCont: {
        flex: 4,

    },
    pinCont: {
        flex: 1,
        backgroundColor: "white",
        alignSelf: 'center',
        borderRadius: 20,

        marginLeft: '5%'

    },
    stateCont: {
        flex: 1,
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