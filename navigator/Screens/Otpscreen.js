import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Otpscreen = ({ navigation }) => {
    const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
    const [referralCode, setReferralCode] = useState('');
    //Defining useRef for taking reference of current react comp, in this case taking array because we have six inputs to manipulate
    const inputsRef = useRef([]);
    // Function to handle OTP digit input
    const handleOtpInputChange = (index, value) => {
        console.log('Inside Input change function');
        const newOtpDigits = [...otpDigits]; //here we're creating a shallow copy of otpdigits array

        newOtpDigits[index] = value;
        for (let i = index + 1; i < 6; i++) {

            newOtpDigits[i] = '';


        }
        setOtpDigits(newOtpDigits);

        //Move focus to next input box if current box is filled
        if (value && index < 5) {
            // Calc the index of the next input box
            const nextInd = index + 1;
            console.log("Next Ind", nextInd);
            //Find the next input box then focus on it
            const nextInput = inputsRef.current[nextInd];

            //focus is a function of useRef hook to focus on comp
            nextInput.focus();
        }
        // else if (!value && index >= 5) { //If current is null, move focus to prev box
        //     const prevInd = index - 1;
        //     console.log("Prev Ind", prevInd);
        //     const prevInput = inputsRef.current[prevInd];
        //     prevInput.focus();

        // }

    };

    // Function to handle OTP submission
    const handleSubmit = () => {
        const otp = otpDigits.join('');
        console.log('User OTP', otp);
        console.log('User Referral Code', referralCode);
        // Now 'otp' contains the complete OTP entered by the user
        // Send 'otp' to your backend for validation
        // Handle navigation or display appropriate message based on validation result
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Please enter the OTP received in your email</Text>
            <View style={styles.otpContainer}>
                {otpDigits.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        placeholder="-"
                        maxLength={1}
                        keyboardType="numeric"
                        value={digit}
                        onChangeText={(value) => handleOtpInputChange(index, value)}
                        ref={(input) => (inputsRef.current[index] = input)}
                    />
                ))}
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter Referral Code (optional)"
                value={referralCode}
                onChangeText={setReferralCode}

            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    otpInput: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderWidth: 1,
        // elevation: .5,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 7
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#23AA49',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Otpscreen;
