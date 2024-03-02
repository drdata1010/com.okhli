import * as React from "react";
import { Image, StyleSheet } from "react-native";

const ProdOffers = () => {
    return (
        <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-36779.png")}
        />
    );
};

const styles = StyleSheet.create({
    frameChild: {
        position: "absolute",
        top: 0,
        left: 9,
        width: 342,
        height: 158,
    },
});

export default ProdOffers;
