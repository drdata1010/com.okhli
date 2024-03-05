import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MedButton from "../components/MedButton";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.intro}>
            <Image style={[styles.icon, styles.icon1]} resizeMode="cover" source={require("../assets/kindpng-7336354-1.png")} />
            <Image style={[styles.icon, styles.icon2]} resizeMode="cover" source={require("../assets/kindpng-7336354-3.png")} />

            <View style={styles.frame}>
                <View style={styles.playstoreContainer}>
                    <Image style={styles.playstoreIcon} resizeMode="cover" source={require("../assets/playstore-1.png")} />
                    <Text style={styles.text}>Okhli - An Ethnic Stop For All Ayurvedic Needs</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.buttonContainer}>
                    <MedButton />
                    <Text style={styles.shopNow}>Shop now</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.introChild} />
            <Image style={styles.introImage} resizeMode="cover" source={require("../assets/timeless.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
    intro: {
        flex: 1,
        backgroundColor: Color.colorWhite,
        height: 844,
        width: "100%",
    },
    icon: {
        position: "absolute",
        height: "40%",
        width: "95%",
    },
    icon1: {
        top: 31,
        left: "30%",
    },
    icon2: {
        top: 414,
        left: 333,
    },
    frame: {
        position: "absolute",
        width: "90%",
        height: "42%",
        top: "15%",
        left: "50%",
        marginLeft: -186,
        overflow: "hidden",


    },
    playstoreContainer: {
        position: "absolute",
        top: 0,
        left: 27,
        alignItems: "center",
    },
    playstoreIcon: {
        width: 73,
        height: 66,
        borderRadius: 109,
    },
    text: {
        marginTop: 40,
        width: 318,
        color: Color.lightFontDark,
        fontFamily: FontFamily.body16Bold,
        fontSize: FontSize.heading28Bold_size,
        textAlign: "center",
        fontWeight: "700",
    },
    buttonContainer: {
        position: "absolute",
        top: "65%",
        left: 81,
        width: "100%",
        height: "40%",


    },
    shopNow: {
        position: "absolute",
        top: 14,
        left: 73,
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,

    },
    introChild: {
        backgroundColor: Color.colorForestgreen,
        height: "40%",
        width: "100%",
        // left: 0,
        top: '60%',
        position: "absolute",
    },
    introImage: {
        position: "absolute",
        height: "40%",
        width: "90%",
        top: "60%",

    },
});

export default Intro;

