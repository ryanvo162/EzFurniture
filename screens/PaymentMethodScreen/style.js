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
    addNewCardContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginEnd: 20,
    },
    addNewCardText: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
        color: primaryColor,
    },
    imageCard: {
        width: "100%",
        height: 220,
    },
    textOrtherPayment:{
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
        color: blackColor,
        marginLeft: 16,
        marginBottom: 16,   

    },
    radioItem:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,
        backgroundColor: gray1Color,
        padding:5,
        marginHorizontal:16,
        // borderRadius:5,
    },
    
    labelStyle:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,
    },

});
