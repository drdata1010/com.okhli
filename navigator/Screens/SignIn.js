import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

GoogleSignin.configure({
    webClientId: '259249234282-1jol54jf9i12u48l4mf17br9oakafbnr.apps.googleusercontent.com',
});
const SignIn = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };

    //Firebase Google connection implementation

    async function onGoogleButtonPress() {
        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(googleCredential);
            console.log("User Sign In Successfully using Gmail!")
        } catch (err) {
            console.log(err);
        }
    }

    // Firebase Facebook connection
    async function onFacebookButtonPress() {
        try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccessToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(facebookCredential);
            console.log("User Sign In Successfully using FB!")
        } catch (err) {
            console.log(err)
        }
    }

    console.log("Reached to SignIn")
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
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
                </View>
            </View>
            <View style={styles.otherCont}>

            </View>
        </View>



        //         <View style={styles.signIn}>
        //             <View style={styles.bg}>
        //                 <Image
        //                     style={[styles.patternIcon, styles.shapePosition]}
        //                     resizeMode="cover"
        //                     source={require("../assets/pattern.png")}
        //                 />
        //                 <View style={[styles.shape, styles.shapePosition]} />
        //             </View>
        //             <View style={styles.content}>
        //                 <View style={styles.form}>
        //                     <Text style={[styles.welcomeLoginTo, styles.emailTypo]}>{`Welcome,
        // login to start with us`}</Text>
        //                     <View style={[styles.groupParent, styles.fieldsSpaceBlock]}>

        //                         <View style={[styles.emailParent, styles.parentLayout]}>
        //                             <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
        //                             <View style={styles.groupChild} />
        //                             <TextInput
        //                                 style={[styles.textInput, styles.emailFlexBox, styles.input]}
        //                                 value={email}
        //                                 onChangeText={text => setEmail(text)}
        //                                 keyboardType="email-address"
        //                                 autoCapitalize="none"
        //                                 placeholder="Enter your email"
        //                             />
        //                         </View>
        //                         <View style={[styles.passwordParent, styles.parentLayout]}>
        //                             <Text style={[styles.email, styles.emailFlexBox]}>Password</Text>
        //                             <View style={styles.groupChild} />
        //                             <TextInput
        //                                 style={[styles.textInput, styles.emailFlexBox, styles.input]}
        //                                 value={password}
        //                                 onChangeText={text => setPassword(text)}
        //                                 secureTextEntry={true}
        //                                 placeholder="Enter your password"
        //                             />
        //                         </View>
        //                     </View>
        //                     <View style={styles.fieldsSpaceBlock}>
        //                         <Text style={styles.forgotPassword}>Forgot Password?</Text>
        //                     </View>
        //                 </View>
        //             </View>
        //             <View style={styles.form1}>
        //                 <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.button}>
        //                     <Text style={styles.dontHaveAnContainer}>
        //                         <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        //                         <Text style={[styles.signUp, styles.emailTypo]}>SIGN UP</Text>
        //                     </Text>
        //                 </TouchableOpacity>
        //             </View>
        //             <View style={styles.continueWith}>
        //                 <Text style={styles.orContinueWith}>or continue with?</Text>
        //                 <View style={[styles.social, styles.logoFlexBox]}>
        //                     <TouchableOpacity onPress={onGoogleButtonPress}>
        //                         <Image
        //                             style={styles.iconLayout}
        //                             resizeMode="cover"
        //                             source={require("../assets/google.png")}
        //                         />
        //                     </TouchableOpacity>
        //                     <View style={[styles.icon1, styles.iconLayout]}>
        //                         <View style={[styles.rectangle, styles.iconLayout]} />
        //                         <TouchableOpacity onPress={onFacebookButtonPress}>
        //                             <Image
        //                                 style={[styles.logoFbSimpleIcon, styles.logInPosition]}
        //                                 resizeMode="cover"
        //                                 source={require("../assets/logofbsimple.png")}
        //                             />
        //                         </TouchableOpacity>
        //                     </View>
        //                 </View>
        //             </View>
        //             <View style={[styles.logo, styles.logoFlexBox]}>
        //                 <Image
        //                     style={styles.playstore1Icon}
        //                     resizeMode="cover"
        //                     source={require("../assets/playstore-11.png")}
        //                 />
        //             </View>
        //             <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={[styles.rectangleParent, styles.groupInnerLayout]}>
        //                 <View style={[styles.groupInner, styles.groupInnerLayout]} />
        //                 <Text style={[styles.logIn, styles.logInPosition]}>Sign in</Text>
        //             </TouchableOpacity>
        //         </View>
    );
};

const styles = StyleSheet.create({
    logoCont: {
        flex: 1,
        backgroundColor: '#23AA49'
    },
    inner1Cont: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
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
    otherCont: {
        flex: 1,
        backgroundColor: 'white'
    },
    playstore1Icon: {
        height: '80%',
        width: '80%',
        // top: "-15%",
        // alignSelf: 'center',

    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        // position: 'absolute',
        height: '36%',
        width: '28%',
        top: "-18%",
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 48
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
    textInput: {
        top: "40%",
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

    logo: {
        top: "12%",
        left: "42%",
        borderRadius: 50,
        padding: 2,
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
