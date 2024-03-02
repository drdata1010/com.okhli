import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../../GlobalStyles";

const AllProds = () => {
    return <View style={styles.groupChild} />;
};

const styles = StyleSheet.create({
    groupChild: {
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: Border.br_base,
        backgroundColor: Color.lightColorsLightBG,
        width: 350,
        height: 154,
    },
});

export default AllProds;
