import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const TitleBar = (props) => {
    return (
        <View style={styles.homeheaderPosition}>
            <View style={styles.backButtonCont}>
                <Image
                    style={styles.backImage}
                    source={require("../assets/backArrow.png")}
                />
            </View>
            <View style={styles.pageTitleCont}>
                <Text style={styles.titleText}> {props.text}</Text>
            </View>
        </View>

    )

}

export default TitleBar;

const styles = StyleSheet.create({
    homeheaderPosition: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        height: '10%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    texts: {
        fontSize: 16,
        fontWeight: '500',
    },
    backButtonCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageTitleCont: {
        flex: 5,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    backImage: {
        height: '50%',
        width: '50%'
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        left: '23%',
        color: 'black'
    }
});
