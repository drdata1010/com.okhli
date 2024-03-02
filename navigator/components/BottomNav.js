import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../../GlobalStyles";

const BottomNav = () => {
    return <View style={styles.groupChild} />;
};

const styles = StyleSheet.create({
    groupChild: {
        position: "absolute",
        marginTop: -42,
        marginLeft: -195,
        top: "50%",
        left: "50%",
        borderTopLeftRadius: Border.br_xl,
        borderTopRightRadius: Border.br_xl,
        backgroundColor: Color.white,
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowRadius: 20,
        elevation: 20,
        shadowOpacity: 1,
        width: 390,
        height: 84,
    },
});

export default BottomNav;
