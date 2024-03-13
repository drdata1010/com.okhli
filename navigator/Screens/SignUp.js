import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { FontFamily, Color, Border, Padding, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [badName, setBadName] = useState(false);
    const [email, setEmail] = useState("");
    const [badEmail, setBadEmail] = useState(false);
    const [mobile, setMobile] = useState("");
    const [badMobile, setBadMobile] = useState(false);
    const [password, setPassword] = useState("");
    const [badPassword, setBadPassword] = useState(false);
    const [cnfPassword, setCnfPassword] = useState("");
    const [badCnfPassword, setBadCnfPassword] = useState(false);

    const validate = () => {
        if (name == "") {
            setBadName(true);
        } else {
            setBadName(false);
        }
        if (email == "") {
            setBadEmail(true);
        } else {
            setBadEmail(false);
        }
        if (mobile == "") {
            setBadMobile(true);
        } else if (mobile.length < 10) {
            setBadMobile(true);
        } else {
            setBadMobile(false);
        }
        if (password == "") {
            setBadPassword(true);
        } else {
            setBadPassword(false);
        }
        if (cnfPassword == "") {
            setBadCnfPassword(true);
        } else if (cnfPassword !== password) {
            setBadCnfPassword(true);
        } else {
            setBadCnfPassword(false);
        }

        if (
            badEmail == false &&
            badName == false &&
            badMobile == false &&
            badPassword == false &&
            badCnfPassword == false
        ) {
            handleSignUp();
        }
    };



    const handleSignUp = async () => {
        console.log("in handele signup");

        const user = {
            name: name,
            phNo: mobile,
            email: email,
            password: password,
            cnfPassword: cnfPassword,
        };

        try {
            const response = await fetch("http://10.0.2.2:8000/signup", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ user: user })
            });
            if (response.ok) {
                const data = await response.json()
                if (data.code === '203') {
                    Alert.alert(data.message);
                }
                if (data.code === '204') {
                    Alert.alert(data.message);
                }
                if (data.code === '205') {
                    await AsyncStorage.setItem("authToken", data.authToken);
                    navigation.replace('Home');
                }
                console.log('response data :', data.authToken)


            } else {
                console.log('Signin failed');
            }
        } catch (error) {
            console.error('Error  : ', error);
        }
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
                                            value={name}
                                            onChangeText={setName}
                                        />
                                    </View>
                                    {badName === true && (
                                        <Text style={{ marginTop: 10, marginLeft: 35, color: "red" }}>
                                            Please Enter Name
                                        </Text>
                                    )}
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
                                    {badEmail === true && (
                                        <Text style={{ marginTop: 10, marginLeft: 35, color: "red" }}>
                                            Please Enter Email ID
                                        </Text>
                                    )}
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
                                {badPassword === true && (
                                    <Text style={{ marginTop: 10, marginLeft: 35, color: "red" }}>
                                        Please Enter Password
                                    </Text>
                                )}
                            </View>
                            <View style={{ flex: 1, top: '-10%' }}>
                                <Text style={styles.titleField}>
                                    Confirm Password
                                </Text>
                                <View style={styles.textField}>
                                    <TextInput
                                        style={[styles.input]}
                                        value={cnfPassword}
                                        onChangeText={text => setCnfPassword(text)}
                                        secureTextEntry={true}
                                        placeholder="Enter your password"
                                    />
                                </View>
                                {badCnfPassword === true && (
                                    <Text style={{ marginTop: 10, marginLeft: 35, color: "red" }}>
                                        Password not Matched
                                    </Text>
                                )}
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
                                        value={mobile}
                                        onChangeText={setMobile}
                                    />
                                </View>
                                {badMobile === true && (
                                    <Text style={{ marginTop: 10, marginLeft: 35, color: "red" }}>
                                        Please Enter Mobile No.
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View style={styles.inner22Cont}>
                            <TouchableOpacity onPress={() => validate()} style={styles.buttonContainer}>
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
    }
});

export default SignUp;


