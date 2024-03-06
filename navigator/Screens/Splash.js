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
    return (
        <View style={styles.splash}>
            <View style={styles.playstore1Icon}>
                <Image
                    source={require("../assets/playstore-11.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    playstore1Icon: {
        height: '20%',
        top: "40%",
        flex: 1,
        position: "absolute",
        alignSelf: 'center',
    },
    splash: {
        backgroundColor: Color.lightColorsPrimary,
        flex: 1,

    },
});

export default Splash;
