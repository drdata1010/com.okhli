import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { TouchableOpacity } from 'react-native-gesture-handler';
const Button = (props) => {
    return (

        <View style={styles.buttonCont}>
            <Text style={styles.textStyle}>Submit</Text>
        </View>

    )
}

export default Button

const styles = StyleSheet.create({
    buttonCont: {
        height: "13%",
        alignSelf: 'center',
        top: '21%',
        width: '70%',
        backgroundColor: '#23AA49',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        fontWeight: 'bold',
    },
});