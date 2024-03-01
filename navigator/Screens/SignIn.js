import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
    const navigation = useNavigation();
    console.log("Reached to SignIn")
    return (
        <View style={styles.signIn}>
            <View style={styles.bg}>
                <Image
                    style={[styles.patternIcon, styles.shapePosition]}
                    resizeMode="cover"
                    source={require("../assets/pattern.png")}
                />
                <View style={[styles.shape, styles.shapePosition]} />
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={[styles.welcomeLoginTo, styles.emailTypo]}>{`Welcome,
login to start with us`}</Text>
                    <View style={[styles.groupParent, styles.fieldsSpaceBlock]}>
                        <View style={[styles.emailParent, styles.parentLayout]}>
                            <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
                            <View style={styles.groupChild} />
                            <Text style={[styles.souravgmailcom, styles.emailFlexBox]}>
                                sourav@gmail.com
                            </Text>
                        </View>
                        <View style={[styles.passwordParent, styles.parentLayout]}>
                            <Text style={[styles.email, styles.emailFlexBox]}>Password</Text>
                            <View style={styles.groupChild} />
                            <Text style={[styles.souravgmailcom, styles.emailFlexBox]}>
                                *****************
                            </Text>
                        </View>
                    </View>
                    <View style={styles.fieldsSpaceBlock}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </View>
                </View>
            </View>
            <View style={styles.form1}>
                <View style={styles.button}>
                    <Text style={styles.dontHaveAnContainer}>
                        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
                        <Text style={[styles.signUp, styles.emailTypo]}>SIGN UP</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.continueWith}>
                <Text style={styles.orContinueWith}>or continue with?</Text>
                <View style={[styles.social, styles.logoFlexBox]}>
                    <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/google.png")}
                    />
                    <View style={[styles.icon1, styles.iconLayout]}>
                        <View style={[styles.rectangle, styles.iconLayout]} />
                        <Image
                            style={[styles.logoFbSimpleIcon, styles.logInPosition]}
                            resizeMode="cover"
                            source={require("../assets/logofbsimple.png")}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.logo, styles.logoFlexBox]}>
                <Image
                    style={styles.playstore1Icon}
                    resizeMode="cover"
                    source={require("../assets/playstore-11.png")}
                />
            </View>
            <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
                <View style={[styles.groupInner, styles.groupInnerLayout]} />
                <Text style={[styles.logIn, styles.logInPosition]}>Log in</Text>
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
    emailTypo: {
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
    },
    fieldsSpaceBlock: {
        marginTop: 30,
        width: 307,
    },
    parentLayout: {
        height: 77,
        left: 0,
        width: 307,
        position: "absolute",
    },
    emailFlexBox: {
        textAlign: "left",
        position: "absolute",
    },
    logoFlexBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconLayout: {
        height: 44,
        width: 44,
    },
    logInPosition: {
        top: 12,
        position: "absolute",
    },
    groupInnerLayout: {
        width: 210,
        height: 50,
        position: "absolute",
    },
    patternIcon: {
        maxWidth: "100%",
        maxHeight: "100%",
        opacity: 0.3,
        overflow: "hidden",
    },
    shape: {
        backgroundColor: Color.colorForestgreen,
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
    welcomeLoginTo: {
        fontSize: FontSize.heading24Bold_size,
        lineHeight: 36,
        textAlign: "center",
        color: Color.textTextDarkest,
    },
    email: {
        color: Color.colorGray,
        fontSize: FontSize.paragraph14Regular_size,
        left: 0,
        top: 0,
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
    },
    groupChild: {
        top: 27,
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
    souravgmailcom: {
        top: 43,
        left: 14,
        color: Color.colorBlack,
        fontFamily: FontFamily.metadata12Regular,
        fontSize: FontSize.subheader16Bold_size,
    },
    emailParent: {
        top: 0,
        height: 77,
    },
    passwordParent: {
        top: 85,
    },
    groupParent: {
        height: 162,
    },
    forgotPassword: {
        alignSelf: "stretch",
        lineHeight: 22,
        color: Color.colorForestgreen,
        fontFamily: FontFamily.metadata12Regular,
        fontSize: FontSize.paragraph14Regular_size,
        textAlign: "center",
    },
    form: {
        shadowColor: "rgba(2, 90, 69, 0.1)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 30,
        elevation: 30,
        shadowOpacity: 1,
        paddingHorizontal: 16,
        paddingTop: 48,
        paddingBottom: 30,
        backgroundColor: Color.textTextWhite,
        borderRadius: Border.br_3xs,
        alignItems: "center",
    },
    content: {
        marginLeft: -170,
        top: 135,
        left: "50%",
        width: 339,
        height: 384,
        alignItems: "center",
        position: "absolute",
    },
    dontHaveAn: {
        fontFamily: FontFamily.metadata12Regular,
        fontSize: FontSize.paragraph14Regular_size,
        color: Color.textTextDarkest,
    },
    signUp: {
        color: Color.colorForestgreen,
        fontSize: FontSize.subheader16Bold_size,
    },
    dontHaveAnContainer: {
        textAlign: "center",
    },
    button: {
        zIndex: 0,
        alignItems: "center",
    },
    form1: {
        top: 625,
        left: 83,
        alignItems: "center",
        position: "absolute",
    },
    orContinueWith: {
        fontSize: FontSize.metadata12Regular_size,
        lineHeight: 19,
        fontFamily: FontFamily.metadata12Regular,
        textAlign: "center",
        color: Color.textTextDarkest,
    },
    rectangle: {
        borderRadius: 25,
        left: 0,
        top: 0,
        backgroundColor: Color.textTextWhite,
        position: "absolute",
    },
    logoFbSimpleIcon: {
        left: 12,
        width: 20,
        height: 20,
        overflow: "hidden",
    },
    icon1: {
        marginLeft: 10,
    },
    social: {
        marginTop: 12,
    },
    continueWith: {
        top: 686,
        left: 142,
        alignItems: "center",
        position: "absolute",
    },
    playstore1Icon: {
        borderRadius: 109,
        width: 58,
        height: 52,
    },
    logo: {
        top: 103,
        left: 153,
        borderRadius: 50,
        padding: 6,
        backgroundColor: Color.textTextWhite,
        position: "absolute",
    },
    groupInner: {
        borderRadius: 20,
        left: 0,
        top: 0,
        backgroundColor: Color.colorForestgreen,
    },
    logIn: {
        left: 81,
        lineHeight: 26,
        color: Color.textTextWhite,
        fontSize: FontSize.subheader16Bold_size,
        textAlign: "center",
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
    },
    rectangleParent: {
        top: 564,
        left: 90,
    },
    signIn: {
        backgroundColor: "#e8f1ee",
        flex: 1,
        height: 844,
        overflow: "hidden",
        width: "100%",
    },
});

export default SignIn;
