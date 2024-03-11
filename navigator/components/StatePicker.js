import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const StatePicker = () => {
    const [selectedState, setSelectedState] = useState('');

    const states = [
        'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh',
        'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
        'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
        'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    const handleStateChange = (state) => {
        setSelectedState(state);
    };

    return (
        <View style={styles.picker}>
            <View style={styles.pickerStyle}>
                <Picker
                    selectedValue={selectedState}
                    onValueChange={(itemValue, itemIndex) => handleStateChange(itemValue)}
                >
                    {states.map((state, index) => (
                        <Picker.Item key={index} label={state} value={state} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};
export default StatePicker;
const styles = StyleSheet.create({
    picker: {
        flex: 1,
        justifyContent: 'center'
    },
    pickerStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        height: '55%',
        justifyContent: 'center'
    },
});