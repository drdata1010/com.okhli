import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ProdOffers from "../components/ProdOffers";
import BestSelling from "../components/BestSelling";
import AllProds from "../components/AllProds";
import BottomNav from "../components/BottomNav";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={[styles.home, styles.homeLayout]}>
            <View horizontal={true} style={styles.bestoffcontParent}>
                <View style={styles.bestoffcont}>
                    <Image
                        style={[styles.bestoffcontChild, styles.bestoffcontLayout]}
                        resizeMode="cover"
                        source={require("../assets/group-36780.png")}
                    />
                    <Image
                        style={[styles.bestoffcontItem, styles.bestoffcontLayout]}
                        resizeMode="cover"
                        source={require("../assets/group-36781.png")}
                    />
                    <ProdOffers />
                </View>
                <View style={styles.bestsellcont}>
                    <View style={[styles.rectangleParent, styles.groupParentLayout1]}>
                        <View style={[styles.groupChild, styles.groupChildBg]} />
                        <View style={[styles.h1Parent, styles.h1GroupPosition]}>
                            <Text style={[styles.h1, styles.h1Typo]}>Fresh Broccoli</Text>
                            <Text style={[styles.h2, styles.h2Typo]}>1kg, 2$</Text>
                        </View>
                        <View style={[styles.rectangleGroup, styles.groupLayout]}>
                            <View style={[styles.groupItem, styles.groupLayout]} />
                            <Image
                                style={styles.plus1Icon}
                                resizeMode="cover"
                                source={require("../assets/plus-1.png")}
                            />
                        </View>
                        <View style={styles.groupInner} />
                        <Image
                            style={styles.pngkeyIcon}
                            resizeMode="cover"
                            source={require("../assets/pngkey.png")}
                        />
                    </View>
                    <View style={[styles.rectangleContainer, styles.groupParentLayout1]}>
                        <BestSelling />
                        <View style={[styles.h1Group, styles.h1GroupPosition]}>
                            <Text style={[styles.h1, styles.h1Typo]}>Arabic Ginger</Text>
                            <Text style={[styles.h2, styles.h2Typo]}>1kg, 4$</Text>
                        </View>
                        <View style={[styles.rectangleGroup, styles.groupLayout]}>
                            <View style={[styles.groupItem, styles.groupLayout]} />
                            <Image
                                style={styles.plus1Icon}
                                resizeMode="cover"
                                source={require("../assets/plus-1.png")}
                            />
                        </View>
                        <View style={styles.groupInner} />
                        <Image
                            style={styles.pngfuel3Icon}
                            resizeMode="cover"
                            source={require("../assets/pngfuel-3.png")}
                        />
                    </View>
                    <View style={[styles.groupParent, styles.groupParentLayout1]}>
                        <View style={[styles.rectangleParent1, styles.groupParentLayout1]}>
                            <View style={[styles.groupChild, styles.groupChildBg]} />
                            <View style={styles.groupInner} />
                            <Image
                                style={[
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon,
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                            />
                            <View style={[styles.frameWrapper, styles.frameLayout]}>
                                <View style={styles.h1Container}>
                                    <Text style={styles.h1Typo}>Bell Pepper Red</Text>
                                    <Text style={[styles.h22, styles.h2Typo]}>1kg, 6$</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.rectangleGroup, styles.groupLayout]}>
                            <View style={[styles.groupItem, styles.groupLayout]} />
                            <Image
                                style={styles.plus1Icon}
                                resizeMode="cover"
                                source={require("../assets/plus-1.png")}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.allprodscont}>
                    <View style={[styles.groupContainer, styles.groupParentLayout]}>
                        <View style={[styles.groupContainer, styles.groupParentLayout]}>
                            <AllProds />
                            <View style={styles.groupInner} />
                            <Image
                                style={[
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon,
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                            />
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View style={styles.h1Container}>
                                    <Text style={styles.h1Typo}>Bell Pepper Red</Text>
                                    <Text style={[styles.h22, styles.h2Typo]}>1kg, 6$</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.rectangleParent4, styles.groupLayout]}>
                            <View style={[styles.groupItem, styles.groupLayout]} />
                            <Image
                                style={styles.plus1Icon}
                                resizeMode="cover"
                                source={require("../assets/plus-1.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.groupParent1, styles.groupParentLayout]}>
                        <View style={[styles.groupContainer, styles.groupParentLayout]}>
                            <View style={[styles.groupChild7, styles.groupParentLayout]} />
                            <View style={styles.groupInner} />
                            <Image
                                style={[
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon,
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                            />
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View style={styles.h1Container}>
                                    <Text style={styles.h1Typo}>Bell Pepper Red</Text>
                                    <Text style={[styles.h22, styles.h2Typo]}>1kg, 6$</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.rectangleParent4, styles.groupLayout]}>
                            <View style={[styles.groupItem, styles.groupLayout]} />
                            <Image
                                style={styles.plus1Icon}
                                resizeMode="cover"
                                source={require("../assets/plus-1.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.groupParent2, styles.groupParentLayout]}>
                        <View style={[styles.groupContainer, styles.groupParentLayout]}>
                            <View style={[styles.groupChild7, styles.groupParentLayout]} />
                            <View style={styles.groupInner} />
                            <Image
                                style={[
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon3,
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                            />
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View style={styles.h1Container}>
                                    <Text style={styles.h1Typo}>Bell Pepper Red</Text>
                                    <Text style={[styles.h22, styles.h2Typo]}>1kg, 6$</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.rectangleParent4, styles.groupLayout]}>
                            <View style={[styles.groupItem, styles.groupLayout]} />
                            <Image
                                style={styles.plus1Icon}
                                resizeMode="cover"
                                source={require("../assets/plus-1.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.groupParent3, styles.groupParentLayout]}>
                        <View style={[styles.groupContainer, styles.groupParentLayout]}>
                            <View style={[styles.groupChild7, styles.groupParentLayout]} />
                            <View style={styles.groupInner} />
                            <Image
                                style={[
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon3,
                                    styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
                            />
                            <View style={[styles.frameContainer, styles.frameLayout]}>
                                <View style={styles.h1Container}>
                                    <Text style={styles.h1Typo}>Bell Pepper Red</Text>
                                    <Text style={[styles.h22, styles.h2Typo]}>1kg, 6$</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.rectangleParent4, styles.groupLayout]}>
                            <View style={[styles.groupItem, styles.groupLayout]} />
                            <Image
                                style={styles.plus1Icon}
                                resizeMode="cover"
                                source={require("../assets/plus-1.png")}
                            />
                        </View>
                    </View>
                </View>
                <Text style={[styles.allProducts, styles.allProductsTypo]}>
                    All Products
                </Text>
                <Text style={[styles.bestSellings, styles.allProductsTypo]}>
                    Best Sellings
                </Text>
            </View>
            <View style={styles.navbargroup}>
                <BottomNav />
                <View style={[styles.navhomeParent, styles.navhomeParentLayout]}>
                    <Image
                        style={[styles.navhomeIcon, styles.iconPosition]}
                        resizeMode="cover"
                        source={require("../assets/navhome.png")}
                    />
                    <Text style={[styles.home1, styles.cartTypo]}>Home</Text>
                </View>
                <View style={[styles.navordersParent, styles.navordersLayout]}>
                    <Image
                        style={[styles.navordersIcon, styles.navordersLayout]}
                        resizeMode="cover"
                        source={require("../assets/navorders.png")}
                    />
                    <Text style={[styles.orders, styles.cartTypo]}>Orders</Text>
                </View>
                <View style={styles.navcartParent}>
                    <Image
                        style={[styles.navcartIcon, styles.homeLayout]}
                        resizeMode="cover"
                        source={require("../assets/navcart.png")}
                    />
                    <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
                </View>
                <View style={[styles.navprofile1Parent, styles.navhomeParentLayout]}>
                    <Image
                        style={[styles.navhomeIcon, styles.iconPosition]}
                        resizeMode="cover"
                        source={require("../assets/navprofile-1.png")}
                    />
                    <Text style={[styles.profile, styles.cartTypo]}>Profile</Text>
                </View>
            </View>
            <View style={styles.homeheaderPosition}>
                <View style={[styles.homeheaderChild, styles.homeheaderPosition]} />
                <View style={[styles.goodMorningParent, styles.manIconPosition]}>
                    <Text style={[styles.goodMorning, styles.goodMorningTypo]}>
                        Good morning
                    </Text>
                    <Text style={[styles.rahulSharma, styles.goodMorningTypo]}>
                        Rahul Sharma
                    </Text>
                </View>
                <Image
                    style={[styles.manIcon, styles.manIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/man.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeLayout: {
        width: "100%",
        overflow: "hidden",
    },
    bestoffcontLayout: {
        width: 342,
        height: 158,
        top: 0,
        position: "absolute",
    },
    groupParentLayout1: {
        height: 214,
        width: 163,
        position: "absolute",
    },
    groupChildBg: {
        backgroundColor: Color.lightColorsLightBG,
        borderRadius: Border.br_base,
        top: 0,
    },
    h1GroupPosition: {
        height: 44,
        left: 16,
        top: 146,
        position: "absolute",
    },
    h1Typo: {
        textAlign: "left",
        color: Color.fontDark,
        fontFamily: FontFamily.heading20Bold,
        fontWeight: "700",
        fontSize: FontSize.paragraph14Regular_size,
    },
    h2Typo: {
        color: Color.lightColorsSecondary,
        fontSize: FontSize.subheader16Bold_size,
        textAlign: "left",
        fontFamily: FontFamily.heading20Bold,
        fontWeight: "700",
    },
    groupLayout: {
        height: 36,
        width: 36,
    },
    f1ea7dcce3b5d06cd1b1418f9b9413IconLayout: {
        height: 98,
        width: 112,
        top: 24,
        position: "absolute",
    },
    frameLayout: {
        width: 106,
        height: 44,
        position: "absolute",
    },
    groupParentLayout: {
        height: 154,
        width: 350,
        left: 0,
        position: "absolute",
    },
    allProductsTypo: {
        textAlign: "center",
        color: Color.colorBlack,
        fontSize: FontSize.heading20Bold_size,
        fontFamily: FontFamily.heading20Bold,
        fontWeight: "700",
        position: "absolute",
    },
    navhomeParentLayout: {
        width: 29,
        position: "absolute",
    },
    iconPosition: {
        height: 24,
        left: 0,
        top: 0,
    },
    cartTypo: {
        color: Color.colorDimgray,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        fontSize: FontSize.size_5xs,
        textAlign: "center",
        position: "absolute",
    },
    navordersLayout: {
        width: 26,
        position: "absolute",
    },
    homeheaderPosition: {
        height: 81,
        width: 390,
        left: 0,
        top: 0,
        position: "absolute",
    },
    manIconPosition: {
        top: 33,
        position: "absolute",
    },
    goodMorningTypo: {
        fontFamily: FontFamily.body16Medium,
        fontWeight: "500",
        textAlign: "center",
        left: 0,
        position: "absolute",
    },
    bestoffcontChild: {
        left: 363,
    },
    bestoffcontItem: {
        left: 717,
    },
    bestoffcont: {
        height: 158,
        left: 0,
        top: 0,
        width: 380,
        position: "absolute",
    },
    groupChild: {
        height: 214,
        width: 163,
        position: "absolute",
        left: 0,
    },
    h1: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    h2: {
        top: 23,
        left: 0,
        position: "absolute",
    },
    h1Parent: {
        width: 97,
    },
    groupItem: {
        borderRadius: Border.br_3xl,
        backgroundColor: Color.lightColorsPrimary,
        left: 0,
        top: 0,
        position: "absolute",
    },
    plus1Icon: {
        top: 10,
        left: 10,
        width: 16,
        height: 16,
        position: "absolute",
        overflow: "hidden",
    },
    rectangleGroup: {
        top: 166,
        left: 115,
        position: "absolute",
    },
    groupInner: {
        height: 99,
        width: 112,
        left: 26,
        top: 24,
        backgroundColor: Color.lightColorsLightBG,
        position: "absolute",
    },
    pngkeyIcon: {
        top: 36,
        left: 32,
        width: 98,
        height: 71,
        position: "absolute",
    },
    rectangleParent: {
        left: 175,
        top: 1,
        width: 163,
    },
    h1Group: {
        width: 93,
    },
    pngfuel3Icon: {
        top: 27,
        width: 99,
        height: 89,
        left: 34,
        position: "absolute",
    },
    rectangleContainer: {
        top: 1,
        width: 163,
        left: 0,
    },
    f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
        left: 26,
        height: 98,
    },
    h22: {
        marginTop: 4,
    },
    h1Container: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    frameWrapper: {
        left: 16,
        top: 146,
        width: 106,
    },
    rectangleParent1: {
        left: 0,
        top: 0,
    },
    groupParent: {
        left: 346,
        top: 0,
    },
    bestsellcont: {
        top: 215,
        left: 9,
        width: 362,
        height: 215,
        position: "absolute",
    },
    frameContainer: {
        left: 184,
        top: 24,
    },
    groupContainer: {
        top: 0,
    },
    rectangleParent4: {
        top: 86,
        left: 273,
        position: "absolute",
    },
    groupChild7: {
        backgroundColor: Color.lightColorsLightBG,
        borderRadius: Border.br_base,
        top: 0,
    },
    groupParent1: {
        top: 171,
    },
    f1ea7dcce3b5d06cd1b1418f9b9413Icon3: {
        left: 138,
    },
    groupParent2: {
        top: 338,
    },
    groupParent3: {
        top: 517,
    },
    allprodscont: {
        top: 493,
        height: 218,
        width: 350,
        left: 16,
        position: "absolute",
    },
    allProducts: {
        top: 451,
        left: 16,
    },
    bestSellings: {
        top: 179,
        left: 13,
    },
    bestoffcontParent: {
        top: 126,
        left: 5,
        height: 615,
        width: 380,
        position: "absolute",
    },
    navhomeIcon: {
        width: 29,
        position: "absolute",
    },
    home1: {
        left: 3,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        fontSize: FontSize.size_5xs,
        top: 24,
    },
    navhomeParent: {
        height: 33,
        top: 25,
        left: 34,
    },
    navordersIcon: {
        height: 24,
        left: 0,
        top: 0,
    },
    orders: {
        left: 1,
        top: 24,
    },
    navordersParent: {
        left: 132,
        height: 33,
        top: 24,
    },
    navcartIcon: {
        height: "72.73%",
        top: "0%",
        right: "0%",
        bottom: "27.27%",
        left: "0%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    cart: {
        left: 6,
        top: 24,
    },
    navcartParent: {
        height: "39.29%",
        width: "6.72%",
        top: "29.76%",
        right: "34.31%",
        bottom: "30.95%",
        left: "58.97%",
        position: "absolute",
    },
    profile: {
        left: 3,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        fontSize: FontSize.size_5xs,
        top: 25,
    },
    navprofile1Parent: {
        left: 327,
        height: 34,
        top: 24,
    },
    navbargroup: {
        marginTop: 338,
        marginLeft: -195,
        top: "50%",
        left: "50%",
        height: 84,
        width: 390,
        position: "absolute",
    },
    homeheaderChild: {
        borderBottomRightRadius: Border.br_xl,
        borderBottomLeftRadius: Border.br_xl,
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowRadius: 20,
        elevation: 20,
        shadowOpacity: 1,
        backgroundColor: Color.white,
    },
    goodMorning: {
        fontSize: FontSize.metadata12Regular_size,
        color: Color.lightFontGrey,
        top: 0,
    },
    rahulSharma: {
        top: 18,
        color: Color.lightFontDark,
        fontSize: FontSize.subheader16Bold_size,
        fontFamily: FontFamily.body16Medium,
    },
    goodMorningParent: {
        left: 70,
        width: 103,
        height: 39,
    },
    manIcon: {
        left: 22,
        height: 36,
        width: 36,
    },
    home: {
        flex: 1,
        height: 844,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
});

export default Home;
