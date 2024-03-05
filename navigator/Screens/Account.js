import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <View style={styles.titleContainer}>

            </View>
        </View>
    )

}
//What is this?
export default Account;

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        position: 'absolute',
        height: '10%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
});