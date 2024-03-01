import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MedButton from "../components/MedButton";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.intro}>
            <Image
                style={[styles.kindpng73363541Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/kindpng-7336354-1.png")}
            />
            <Image
                style={[styles.kindpng73363543Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/kindpng-7336354-3.png")}
            />
            <View style={styles.frame}>
                <View style={styles.playstore1Parent}>
                    <Image
                        style={styles.playstore1Icon}
                        resizeMode="cover"
                        source={require("../assets/playstore-1.png")}
                    />
                    <Text style={[styles.okhliAn, styles.okhliAnTypo]}>
                        Okhli - An Ethnic Stop For All Ayurvedic Needs
                    </Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }} style={styles.rectangleParent}>
                    <MedButton />
                    <Text style={[styles.shopNow, styles.okhliAnTypo]}>Shop now</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.introChild, styles.introChildRect]} />
            <Image
                style={styles.introChildPosition}
                resizeMode="cover"
                source={require("../assets/timeless.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    iconLayout: {
        height: "40%",
        width: "95%",
        position: "absolute",
    },
    okhliAnTypo: {
        textAlign: "center",
        fontFamily: FontFamily.body16Bold,
        fontWeight: "700",
    },
    introChildPosition: {
        height: "40%",
        width: "90%",
        // left: 0,
        top: '60%',
        position: "absolute",
    },
    introChildRect: {
        height: "40%",
        width: "100%",
        // left: 0,
        top: '60%',
        position: "absolute",
    },
    kindpng73363541Icon: {
        top: 31,
        left: 316,
    },
    kindpng73363543Icon: {
        top: 414,
        left: 333,
    },
    playstore1Icon: {
        borderRadius: 109,
        width: 73,
        height: 66,
    },
    okhliAn: {
        fontSize: FontSize.heading28Bold_size,
        color: Color.lightFontDark,
        width: 318,
        marginTop: 40,
    },
    playstore1Parent: {
        top: 0,
        left: 27,
        alignItems: "center",
        position: "absolute",
    },
    shopNow: {
        top: 14,
        left: 73,
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        position: "absolute",
    },
    rectangleParent: {
        top: 252,
        left: 81,
        width: "100%",
        height: '40%',
        position: "absolute",
    },
    frame: {
        marginLeft: -186,
        top: 124,
        left: "50%",
        width: 372,
        height: 343,
        overflow: "hidden",
        position: "absolute",
    },
    introChild: {
        backgroundColor: Color.colorForestgreen,
    },
    intro: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 844,
    },
});

export default Intro;
