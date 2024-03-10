import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import MyCartComp from "../components/MyCartComp";

const Cart = () => {
    return (
        <View style={{ flex: 1 }}>
            <TitleBar />
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.scrollerView}>
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />
                <MyCartComp />

            </ScrollView>
            <Navbar />
        </View>
    )

}

export default Cart;

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
    scrollerView: {
        top: '10%',
        flex: 1
    }
});