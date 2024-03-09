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
                    <View style={{ flex: 1 }}>
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
                                <View style={{ flex: 1, top: '15%' }}>
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
                                <View style={{ flex: 1, top: '15%' }}>
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
                                    <Text style={styles.titleFieldPass}>
                                        Password
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.otherCont}>
                        <View style={styles.inner21Cont}>
                            <View style={{ flex: 1, top: '-3%' }}>
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
                            <View style={{ flex: 1, top: '-10%' }}>
                                <Text style={styles.titleField}>
                                    Confirm Password
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
                            <View style={{ flex: 1, top: '-10%' }}>
                                <Text style={styles.titleField}>
                                    Mobile No.
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Mobile Number"
                                        keyboardType="phone-pad"
                                        value={phoneNumber}
                                        onChangeText={setPhoneNumber}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.inner22Cont}>
                            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.buttonContainer}>
                                <Text style={styles.shopnow}>Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }} style={styles.button}>
                                <Text style={styles.alreadyHaveAnContainer}>
                                    <Text
                                        style={styles.alreadyHaveAn}
                                    >{`Already have an account? `}</Text>
                                    <Text style={[styles.signIn, styles.signTypo]}>SIGN IN</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
        flex: 5,
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
        flex: 2,
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
        flex: 1,
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
        top: "-13.33%",
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 48
    },
    textField: {
        backgroundColor: "#F6F6F7",
        width: '88%',
        alignSelf: 'center',
        borderRadius: 11,
        height: "50%"
    },
    titleView: {
        flex: 1,
        top: '-15%',
    },
    titleField: {
        height: '20%',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        left: '6%'
    },
    titleFieldPass: {
        bottom: '0%',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        left: '6%',
        top: '22%'
    },
    input: {
        marginLeft: '4%',
        fontSize: 13
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
    button: {
        bottom: '-65%',
        alignItems: "center",
    },
    buttonContainer: {
        position: "absolute",
        width: "50%",
        height: "40%",
        backgroundColor: '#23AA49',
        alignSelf: 'center',
        borderRadius: 30,
        bottom: '40%',
        justifyContent: "center",
    },
    signTypo: {
        fontFamily: FontFamily.subheader16Bold,
        fontWeight: "700",
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

    // signUp: {
    //     backgroundColor: Color.colorWhitesmoke_200,
    //     flex: 1,
    //     height: 844,
    //     overflow: "hidden",
    //     width: "100%",
    // },
});

export default SignUp;


