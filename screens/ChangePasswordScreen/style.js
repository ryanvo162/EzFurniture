import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteColor,
    },
    scrollView: {
        flex: 1,
        
    },

    header: {
        // backgroundColor: primaryColor,
        width: "100%",
        flexDirection: "row",
        paddingTop: 55,
        paddingBottom: 12,
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
        transform: [{ translateY: 1 }],
        color: blackColor,
        marginLeft: 10,
    },
    inputContainer: {
        marginTop: 10,
        marginHorizontal: 34,
    },
    input: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: whiteColor,
        marginTop: 20,
        borderColor: primaryColor,
        fontSize:body.fontSize,
        fontFamily:body.fontFamily,
        borderWidth: 1,
        
    },

    buttonContainer: {
        alignItems: "center",
        marginTop: 30,
    },

    image: {
        width: 415,
        height: 440,
        marginBottom: 20,
        marginTop:20,
        marginLeft: 20,
    },
});
 