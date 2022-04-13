import { StyleSheet, Platform } from "react-native";
import { bold,title1, title2, title3, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray3Color, blackColor } from "../../global/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
    },

    scrollView: {
        flex: 1,
    },

    iconThankyou: {
        alignItems: "center",
        justifyContent: "center",

    },

    textThankyou: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:46,
    },

    textThankyouTitle: {
        fontSize: title1.fontSize,
        fontFamily: title1.fontFamily,
        color: blackColor,
    },
    
    textInforOrder: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:5,
    },

    textInforOrderTitle: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
        color: gray3Color,
    },

    codeOrder: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
        color: blackColor,
    },

    btnContainer: {
        marginTop:55,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

});
