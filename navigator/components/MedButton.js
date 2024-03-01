import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../../GlobalStyles";

const MedButton = () => {
    return <View style={styles.groupChild} />;
};

const styles = StyleSheet.create({
    groupChild: {
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: Border.br_xl,
        backgroundColor: Color.colorForestgreen,
        width: 210,
        height: 50,
    },
});

export default MedButton;
