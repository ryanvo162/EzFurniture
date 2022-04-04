import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: gray1Color,
        padding:20,
        borderTopStartRadius:5,
        borderTopEndRadius:5,
        
    },
    iconClose: {
        position: "absolute",
        top: Platform.OS === "ios" ? 30 : 24,
        right: Platform.OS === "ios" ? 40 : 30,
    },
    addNewCard:{
        fontSize: title2.fontSize,
        fontFamily: title2.fontFamily,
        color: blackColor,
        marginTop:51,
        marginLeft:50,
    },
    nameCardContainer:{
        marginTop:24,
        marginHorizontal:30,

    },
    textNameCard:{
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: gray3Color,
    },
    nameCard:{
        fontSize:title3.fontSize,
        fontFamily: title3.fontFamily,
        color: blackColor,
    },
    line:{
        height:1,
        marginTop:7,
        backgroundColor:gray3Color,
    },
    numberCardContainer:{
        marginTop:16,
        marginHorizontal:30,

    },
    textNumberCard:{
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: gray3Color,
    },
    numberCard:{
        fontSize:title3.fontSize,
        fontFamily: title3.fontFamily,
        color: blackColor,
    },
    line:{
        height:1,
        marginTop:7,
        backgroundColor:gray3Color,
    },
    dateAndCvvContainer:{
        flexDirection:"row",
        marginTop:16,
        marginHorizontal:30,
        marginBottom:30,
    },
    dateContainer:{
        marginRight:10,
    },
    textDate:{
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: gray3Color,
    },
    date:{
        fontSize:title3.fontSize,
        fontFamily: title3.fontFamily,
        color: blackColor,
    },
    line1:{
        width:153,
        height:1,
        marginTop:7,
        backgroundColor:gray3Color,
    },
    cvvContainer:{
        // marginRight:10,
    },
    textCvv:{
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: gray3Color,
    },
    cvv:{
        fontSize:title3.fontSize,
        fontFamily: title3.fontFamily,
        color: blackColor,
    },
    btnAddCard:{
        // width: "100%",
        // justifyContent: "center",
        alignItems: "center",
    },
});
