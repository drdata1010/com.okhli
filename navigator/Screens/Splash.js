import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation();
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Intro");
        }, 3000)
    }, [])
    //./assets/playstore.png
    return (
        <View style={styles.splash}>
            <Image
                style={styles.playstore1Icon}
                resizeMode="cover"
                source={require("../assets/playstore-11.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    playstore1Icon: {
        position: "absolute",
        marginTop: -58,
        marginLeft: -65,
        top: "50%",
        left: "50%",
        borderRadius: Border.br_90xl,
        width: 129,
        height: 116,
    },
    splash: {
        backgroundColor: Color.lightColorsPrimary,
        flex: 1,
        width: "100%",
        height: 844,
    },
});

export default Splash;
