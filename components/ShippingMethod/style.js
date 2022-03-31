import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";

export const styles = StyleSheet.create({

    container: {
        marginHorizontal: 16,
        height: 120,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: "rgba(221, 172, 139, 0.2)",
    },

    textShippingMethod: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
        color: primaryColor,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
    },

    line2: {
        marginHorizontal: 10,
        height: 1,
        backgroundColor: primaryColor,
    },

    statusFast: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 7,
        justifyContent: "space-between",
        alignItems: "center",
    },

    textStatus: {
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,
    },

    priceFast: {
        flexDirection: "row",
    },

    textPrice: {
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: blackColor,
        marginRight: 5,
        marginTop: 1.5,
    },

    dateDelivery: {
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: blackColor,
        marginTop: 4,
        marginHorizontal: 10,
    },
    voucherDelivery: {
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: gray3Color,
        marginVertical: 4,
        marginHorizontal: 10,
    },
});
