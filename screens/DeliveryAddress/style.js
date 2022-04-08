import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteColor,
    },
    containerKeyboard: {
        flex: 1,
    },

    inner: {
        flex: 1,
    },

    header: {
        backgroundColor: whiteColor,
        width: "100%",
        flexDirection: "row",
        paddingTop: 55,
        paddingBottom: 12,
        marginBottom: 16,
    },

    headerLeft: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 20,
    },

    headerLeftText: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
        transform: [{ translateY: 2 }],
        color: "black",
        marginLeft: 10,
    },

    textDelivery: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
        color: blackColor,
    },
    newDeliveryContainer: {
        backgroundColor: gray1Color,
        borderRadius: 5,
        paddingTop: 13,
        paddingBottom: 13,
        // marginTop: 16,
        marginBottom: 16,
        marginHorizontal: 27,
    },
    btnNewDelivery: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 12,

    },
    textNewDelivery: {
        fontSize: title3.fontSize,
        fontFamily: title3.fontFamily,
        color: blackColor,
    },

    centeredView: {
        flex: 1,
        // justifyContent: 'flex-end',
        // backgroundColor: 'rgba(0,0,0,0.5)',
        // alignItems: "center",
    },
    // modal: {
    //     position: 'absolute',
    //     bottom: 25,
    // },

    modalView: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
        backgroundColor: primaryColor,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        padding: 26,
        alignItems: 'center',
    },
    textContainer: {
        width: 374,
        backgroundColor: whiteColor,
        padding: 20,
        borderRadius: 5,
        marginBottom: 10,

    },
    enterYourAddress: {
        width: "100%",
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: blackColor,

    },


});
