import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";


export const styles = StyleSheet.create({
    container:{
        marginHorizontal:27,
        height:140,
        backgroundColor: gray1Color,
        borderRadius:5,
        marginBottom:16,
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:12,
        marginTop:12,
        justifyContent: 'space-between',
    },
    username: {
        fontSize:bold.fontSize,
        fontFamily:bold.fontFamily,
        color:blackColor,
    },
    status: {
        fontSize:title3.fontSize,
        fontFamily:title3.fontFamily,
        color:primaryColor,
    },
    phoneNumber: {
        fontSize:title3.fontSize,
        fontFamily:title3.fontFamily,
        color:gray3Color,
        marginHorizontal:12,
        marginTop:10,
    },
    address: {
        fontSize:title3.fontSize,
        fontFamily:title3.fontFamily,
        color:gray3Color,
        marginHorizontal:12,
        marginTop:10,
    },
    locationIcon: {
        position: 'absolute',
        bottom:12,
        right:12,

    },

});
