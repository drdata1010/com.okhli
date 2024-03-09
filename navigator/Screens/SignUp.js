import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FontFamily, Color, Border, Padding, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignUp = () => {
        // Implement your sign-up logic here
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Phone Number:', phoneNumber);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <View style={styles.logoCont} >
                    <View style={styles.inner1Cont}>
                    </View>
                    <View style={styles.inner2Cont}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.playstore1Icon}
                                source={require("../assets/playstore-11.png")}
                            />
                        </View>
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>
                                Hello friend!
                            </Text>
                            <View style={{ flex: 1, top: '5%' }}>
                                <Text style={styles.titleField}>
                                    Full name
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChangeText={setFullName}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, top: '20%' }}>
                                <Text style={styles.titleField}>
                                    Email
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={[styles.input]}
                                        value={email}
                                        onChangeText={text => setEmail(text)}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        placeholder="Enter your email"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.otherCont}>
                        <View style={styles.inner21Cont}>
                            <View style={{ flex: 1, top: '5%' }}>
                                <Text style={styles.titleField}>
                                    Password
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={[styles.input]}
                                        value={password}
                                        onChangeText={text => setPassword(text)}
                                        secureTextEntry={true}
                                        placeholder="Enter your password"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.otherCont}>

                </View>
            </View>
        </TouchableWithoutFeedback>





        // <View style={styles.signUp}>
        //     <View style={styles.bg}>
        //         <View style={[styles.shape, styles.shapePosition]} />
        //         <Image
        //             style={[styles.patternIcon, styles.shapePosition]}
        //             resizeMode="cover"
        //             source={require("../assets/pattern.png")}
        //         />
        //     </View>
        //     <View style={styles.content}>
        //         <View style={styles.form}>
        //             <View style={styles.logo}>
        //                 <Image
        //                     style={styles.playstore1Icon}
        //                     resizeMode="cover"
        //                     source={require("../assets/playstore-1.png")}
        //                 />
        //             </View>
        //             <View style={styles.form1}>
        //                 <Text style={[styles.helloFriend, styles.signTypo]}>
        //                     Hello friend!
        //                 </Text>
        //                 <View style={styles.groupParent}>
        //                     <View style={[styles.fullNameParent, styles.parentLayout]}>
        //                         <Text style={[styles.fullName, styles.fullNameFlexBox]}>
        //                             Full name
        //                         </Text>
        //                         <View style={styles.groupChild} />
        //                         <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
        //                             Sourav Yadav
        //                         </Text>
        //                     </View>
        //                     <View style={[styles.mobileNoParent, styles.parentLayout]}>
        //                         <Text style={[styles.fullName, styles.fullNameFlexBox]}>
        //                             Mobile no.
        //                         </Text>
        //                         <View style={styles.groupChild} />
        //                         <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
        //                             0987654123456
        //                         </Text>
        //                     </View>
        //                     <View style={[styles.emailParent, styles.parentLayout]}>
        //                         <Text style={[styles.fullName, styles.fullNameFlexBox]}>
        //                             Email
        //                         </Text>
        //                         <View style={styles.groupChild} />
        //                         <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
        //                             sourav@gmail.com
        //                         </Text>
        //                     </View>
        //                     <View style={[styles.passwordParent, styles.parentLayout]}>
        //                         <Text style={[styles.fullName, styles.fullNameFlexBox]}>
        //                             Password
        //                         </Text>
        //                         <View style={styles.groupChild} />
        //                         <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
        //                             *****************
        //                         </Text>
        //                     </View>
        //                     <View style={[styles.confirmPasswordParent, styles.parentLayout]}>
        //                         <Text style={[styles.fullName, styles.fullNameFlexBox]}>
        //                             Confirm password
        //                         </Text>
        //                         <View style={styles.groupChild} />
        //                         <Text style={[styles.souravYadav, styles.fullNameFlexBox]}>
        //                             *****************
        //                         </Text>
        //                     </View>
        //                 </View>
        //             </View>
        //         </View>
        //     </View>
        //     <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }} style={styles.button}>
        //         <Text style={styles.alreadyHaveAnContainer}>
        //             <Text
        //                 style={styles.alreadyHaveAn}
        //             >{`Already have an account? `}</Text>
        //             <Text style={[styles.signIn, styles.signTypo]}>SIGN IN</Text>
        //         </Text>
        //     </TouchableOpacity>
        //     <View style={[styles.rectangleParent, styles.groupChild2Layout]}>
        //         <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        //         <Text style={[styles.signUp1, styles.signTypo]}>Sign up</Text>
        //     </View>
        // </View>
    );
};

const styles = StyleSheet.create({
    logoCont: {
        flex: 1,
        backgroundColor: '#23AA49'
    },
    inner1Cont: {
        flex: 1,
    },
    inner2Cont: {
        flex: 2,
        backgroundColor: 'white',
        width: '85%',
        alignSelf: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderTopWidth: .5,
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopColor: 'black'
    },
    inner21Cont: {
        flex: 1,
        backgroundColor: 'white',
        width: '85%',
        alignSelf: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderTopColor: 'black'
    },
    inner22Cont: {
        flex: 2,
    },
    otherCont: {
        flex: 1,
        backgroundColor: "#E8F1EE",
    },
    playstore1Icon: {
        height: '80%',
        width: '80%',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '36%',
        width: '28%',
        top: "-18%",
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 48
    },
    textField: {
        backgroundColor: "#F6F6F7",
        width: '88%',
        alignSelf: 'center',
        borderRadius: 11,
    },
    titleView: {
        flex: 1,
        top: '-15%',
    },
    titleField: {

        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        left: '6%'
    },
    input: {
        marginLeft: '4%',
    },

    pass: {
        top: '1%'
    },
    forgot: {
        fontSize: 12,
        alignSelf: 'center',
        color: '#23AA49',
        fontWeight: '700',
        top: '10%'
    },
    LoginCont: {
        flex: 1,
    },
    SocialCont: {
        flex: 1,
    },
    buttonCont: {
        flex: 1,
    },
    shopnow: {
        position: "absolute",
        fontSize: FontSize.body16Bold_size,
        color: Color.colorWhite,
        fontFamily: FontFamily.body16Bold,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonContainer: {
        position: "absolute",
        width: "50%",
        height: "80%",
        backgroundColor: '#23AA49',
        alignSelf: 'center',
        borderRadius: 30,
        bottom: '0%',
        justifyContent: "center",
    },
    iconLayout: {
        height: 44,
        width: 44,
        alignSelf: 'center'
    },
    socialLogoCont: {
        right: '5%'
    },
    iconLayout2: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
    },
    iconLayout3: {
        left: '5%'
    },
    emailTypo: {
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
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
        top: '10%',
        alignItems: "center",
    },
    orContinueWith: {
        fontSize: 14,
        fontFamily: FontFamily.metadata12Regular,
        textAlign: "center",
        color: Color.textTextDarkest,
    },
    logoFbSimpleIcon: {
        alignSelf: 'center',
    },
    social: {
        flex: 4,
        flexDirection: "row",
        alignSelf: 'center',
    },









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


