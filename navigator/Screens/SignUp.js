import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { FontFamily, Color, Border, Padding, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.signUp}>
            <View style={styles.bg}>
                <View style={[styles.shape, styles.shapePosition]} />
                <Image
                    style={[styles.patternIcon, styles.shapePosition]}
                    resizeMode="cover"
                    source={require("../assets/pattern.png")}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.logo}>
                        <Image
                            style={styles.playstore1Icon}
                            resizeMode="cover"
                            source={require("../assets/playstore-1.png")}
                        />
                    </View>
                    <View style={styles.form1}>
                        <Text style={[styles.helloFriend, styles.signTypo]}>
                            Hello friend!
                        </Text>
                        <View style={styles.groupParent}>
                            <View style={[styles.fullNameParent, styles.parentLayout]}>
                                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                                    Full name
                                </Text>
                                <View style={styles.groupChild} />
                                <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
                                    Sourav Yadav
                                </Text>
                            </View>
                            <View style={[styles.mobileNoParent, styles.parentLayout]}>
                                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                                    Mobile no.
                                </Text>
                                <View style={styles.groupChild} />
                                <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
                                    0987654123456
                                </Text>
                            </View>
                            <View style={[styles.emailParent, styles.parentLayout]}>
                                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                                    Email
                                </Text>
                                <View style={styles.groupChild} />
                                <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
                                    sourav@gmail.com
                                </Text>
                            </View>
                            <View style={[styles.passwordParent, styles.parentLayout]}>
                                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                                    Password
                                </Text>
                                <View style={styles.groupChild} />
                                <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
                                    *****************
                                </Text>
                            </View>
                            <View style={[styles.confirmPasswordParent, styles.parentLayout]}>
                                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                                    Confirm password
                                </Text>
                                <View style={styles.groupChild} />
                                <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
                                    *****************
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }} style={styles.button}>
                <Text style={styles.alreadyHaveAnContainer}>
                    <Text
                        style={styles.alreadyHaveAn}
                    >{`Already have an account? `}</Text>
                    <Text style={[styles.signIn, styles.signTypo]}>SIGN IN</Text>
                </Text>
            </TouchableOpacity>
            <View style={[styles.rectangleParent, styles.groupChild2Layout]}>
                <View style={[styles.groupChild2, styles.groupChild2Layout]} />
                <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shapePosition: {
        bottom: "0%",
        height: "100%",
        left: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        width: "100%",
    },
    signTypo: {
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
    },
    parentLayout: {
        height: 67,
        left: 0,
        width: 307,
        position: "absolute",
    },
    fullNameFlexBox: {
        textAlign: "left",
        position: "absolute",
    },
    groupChild2Layout: {
        width: 210,
        height: 50,
        position: "absolute",
    },
    shape: {
        backgroundColor: Color.colorForestgreen,
    },
    patternIcon: {
        maxWidth: "100%",
        maxHeight: "100%",
        opacity: 0.3,
        overflow: "hidden",
    },
    bg: {
        height: "36.94%",
        bottom: "63.06%",
        left: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        width: "100%",
    },
    playstore1Icon: {
        borderRadius: Border.br_90xl,
        width: 58,
        height: 52,
    },
    logo: {
        borderRadius: Border.br_31xl,
        flexDirection: "row",
        padding: Padding.p_7xs,
        zIndex: 1,
        backgroundColor: Color.white,
        alignItems: "center",
    },
    helloFriend: {
        fontSize: FontSize.heading24Bold_size,
        lineHeight: 36,
        textAlign: "center",
        color: Color.textTextDarkest,
    },
    fullName: {
        color: Color.colorGray,
        fontSize: FontSize.paragraph14Regular_size,
        left: 0,
        top: 0,
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
    },
    groupChild: {
        top: 17,
        backgroundColor: Color.colorWhitesmoke_100,
        borderStyle: "solid",
        borderColor: Color.colorGainsboro,
        borderWidth: 1,
        height: 50,
        left: 0,
        width: 307,
        borderRadius: Border.br_3xs,
        position: "absolute",
    },
    souravYadav: {
        top: 33,
        left: 14,
        color: Color.colorBlack,
        fontFamily: FontFamily.metadata12Regular,
        fontSize: FontSize.subheader16Bold_size,
    },
    fullNameParent: {
        top: 0,
        height: 67,
    },
    mobileNoParent: {
        top: 168,
    },
    emailParent: {
        top: 84,
    },
    passwordParent: {
        top: 252,
    },
    confirmPasswordParent: {
        top: 336,
    },
    groupParent: {
        height: 403,
        marginTop: 30,
        width: 307,
    },
    form1: {
        shadowColor: "rgba(2, 90, 69, 0.1)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 30,
        elevation: 30,
        shadowOpacity: 1,
        height: 564,
        paddingHorizontal: Padding.p_base,
        paddingTop: Padding.p_29xl,
        paddingBottom: Padding.p_11xl,
        zIndex: 0,
        marginTop: -32,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.white,
        alignItems: "center",
    },
    form: {
        height: 596,
        alignItems: "center",
    },
    content: {
        marginLeft: -170,
        top: 64,
        left: "50%",
        width: 339,
        height: 597,
        alignItems: "center",
        position: "absolute",
    },
    alreadyHaveAn: {
        fontFamily: FontFamily.metadata12Regular,
        fontSize: FontSize.paragraph14Regular_size,
        color: Color.textTextDarkest,
    },
    signIn: {
        color: Color.colorForestgreen,
        fontSize: FontSize.subheader16Bold_size,
    },
    alreadyHaveAnContainer: {
        textAlign: "center",
    },
    button: {
        top: 767,
        left: 79,
        alignItems: "center",
        position: "absolute",
    },
    groupChild2: {
        borderRadius: Border.br_xl,
        left: 0,
        top: 0,
        backgroundColor: Color.colorForestgreen,
    },
    signUp1: {
        top: 12,
        left: 76,
        lineHeight: 26,
        color: Color.white,
        fontSize: FontSize.subheader16Bold_size,
        textAlign: "center",
        position: "absolute",
    },
    rectangleParent: {
        top: 696,
        left: 89,
    },
    signUp: {
        backgroundColor: Color.colorWhitesmoke_200,
        flex: 1,
        height: 844,
        overflow: "hidden",
        width: "100%",
    },
});

export default SignUp;
