import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";


export const styles = StyleSheet.create({

    items: {
        marginHorizontal: 16,
        height: 90,
        backgroundColor: gray1Color,
        borderRadius: 5,
        marginTop: 10,
    },

    imageView: {
        flexDirection: "row",
        marginVertical: 10,
    },

    image: {
        width: 70,
        height: 70,
        backgroundColor:whiteColor,
        borderRadius: 5,
        marginLeft: 10,
    },

    productName: {
        fontSize: title3.fontSize,
        fontFamily: title3.fontFamily,
        color: blackColor,
        marginLeft: 16,
    },
    total:{
        flexDirection: 'row',
        marginTop: 22,
        marginLeft: 16,
    },
    price: {
        fontSize: title3.fontSize,
        fontFamily: title3.fontFamily,
        color:blackColor,
        marginRight: 180,
        
    },
    quantity:{
        fontSize: title3.fontSize,
        fontFamily: title3.fontFamily,
        color:gray2Color,
    },

   
});
