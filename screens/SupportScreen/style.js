import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteColor,
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
    line1: {
        marginHorizontal: 16,
        backgroundColor: gray3Color,
        marginTop: 20,
        height: 2,
    },
    faq: {
        fontSize: title3.fontSize,
        fontFamily: title3.fontFamily,
        color: gray3Color,
        marginLeft: 16,
        marginTop: 20,
        marginBottom: 20,

    },
    line2: {
        marginHorizontal: 16,
        backgroundColor: gray3Color,
        height: 1,
    },
    questionContainer: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginTop: 11,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 11,
    },

    textQuestion: {
        fontSize: body.fontSize,
        fontFamily: body.fontFamily,
        color: gray3Color,
        width: "90%",
    },
});
