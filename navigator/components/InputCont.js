import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputFieldComp = (props) => {
    return (
        <View style={styles.profile}>
            <View style={styles.inputCont}>
                <TextInput
                    style={styles.input}
                    placeholder={props.place}
                />
            </View>
        </View>
    )
}

export default InputFieldComp;

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputCont: {
        justifyContent: 'center',
        height: "60%",
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    input: {
        fontSize: 18,
        left: '10%'
    },
});