import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";


export const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        //backgroundColor: "pink",
    },
    container: {
        flex: 1,
        // justifyContent: "center",
    },
    btnBack: {
        flexDirection: 'row',
        marginLeft: 22,
        marginTop: 22,
    },
    textPayment: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
    },
    line1: {
        backgroundColor: gray2Color,
        marginHorizontal: 16,
        marginTop: 10,
        height: 1,
        alignItems: 'center',
    },
    location: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 16,

    },
    textDelivery: {
        fontSize: title3.fontSize,
        fontFamily: title3.fontFamily,
        color: blackColor,
        marginLeft: 14,
        marginRight: 190,
    },
    address: {
        marginTop: 10,
        marginLeft: 54,
        marginRight: 16,
    },
    textAddress: {
        fontSize: body.fontSize,
        fontFamily: body.fontFamily,
    },
    itemProductName:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    brand: {
        fontSize: title3.fontSize,
        fontFamily: title3.fontFamily,
        color:whiteColor,
        backgroundColor: primaryColor,
        padding: 4,
        borderRadius:5,
        marginRight: 10,
        marginLeft: 16,
        
    },
    productName: {
        fontSize: bold.fontSize,
        fontFamily: bold.fontFamily,
    },
    totalProducts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 10,
    },
    textTotalProducts:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,
    },
    textAmount:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: primaryColor,
    },
    voucher:{
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textVoucher:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,
    },
    choseVoucherContainer:{
        flexDirection: 'row',
    },
    choseVoucher:{
        fontSize: body2.fontSize,
        fontFamily: body2.fontFamily,
        color: gray3Color,
    },
    payment:{
        marginTop: 10,
        marginHorizontal: 16,
        marginBottom: 10,
    },
    paymentMethod:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    textMethod:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,

    },
    textPaymentMethod:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: primaryColor,
    },

    radioItem:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,
        backgroundColor: gray1Color,
        padding:5,
        // borderRadius:5,
    },
    
    labelStyle:{
        fontSize: bold12.fontSize,
        fontFamily: bold12.fontFamily,
        color: blackColor,
    },
    totalContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:38,
        marginTop:26,
    },
    textTotal:{
        fontSize:bold.fontSize,
        fontFamily:bold.fontFamily,
        color:blackColor,
    },
    textPrice:{
        fontSize:title2.fontSize,
        fontFamily:title2.fontFamily,
        color:primaryColor,
    },
    btnOrder:{
      
        alignItems: 'center',
        marginTop:40,
        marginBottom:40,

    },
});
