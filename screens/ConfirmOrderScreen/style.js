import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";
import {
  primaryColor,
  gray2Color,
  gray3Color,
  gray1Color,
  blackColor,
  whiteColor,
} from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },

  webView: {
    // position: "absolute",
    flex: 1,
  },

  btnBack: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingLeft: 20,
    paddingTop: 55,
    paddingBottom: 5,
    width: "100%",
  },

  scrollView: {
    flexGrow: 1,
    paddingTop: 90,
    backgroundColor: whiteColor,
    paddingHorizontal: 16,
  },

  textPayment: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
  },

  line1: {
    backgroundColor: gray2Color,
    marginVertical: 10,
    height: 1,
    alignItems: "center",
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  chooseLocation: {
    // backgroundColor: "red",
  },

  titleLocation: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
  },

  textDelivery: {
    fontSize: title3.fontSize,
    fontFamily: title3.fontFamily,
    color: blackColor,
    marginLeft: 14,
  },

  address: {
    marginTop: 6,
    marginLeft: 36,
    marginRight: 30,
  },

  textInfoAddress: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    color: blackColor,
    marginBottom: 2,
  },

  textInfoAddressError: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    color: gray2Color,
    marginBottom: 2,
  },

  itemProductName: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    // backgroundColor: primaryColor,
  },

  viewTitleProduct: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    backgroundColor: primaryColor,
    borderRadius: 3,
  },

  titleListProduct: {
    fontSize: title3.fontSize,
    fontFamily: title3.fontFamily,
    color: whiteColor,
    padding: 4,
  },

  totalProducts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  totalProducts1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textTotalProducts: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: blackColor,
  },

  textAmount: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: primaryColor,
  },

  voucher: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textVoucher: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: blackColor,
  },

  choseVoucherContainer: {
    flexDirection: "row",
  },

  choseVoucher: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: gray3Color,
  },

  payment: {
    marginBottom: 10,
  },
  
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textMethod: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: blackColor,
  },
  textPaymentMethod: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: primaryColor,
  },

  radioItem: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: blackColor,
    backgroundColor: gray1Color,
    padding: 5,
    // borderRadius:5,
  },

  labelStyle: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: blackColor,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textTotal: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: blackColor,
  },
  textPrice: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    color: primaryColor,
  },
  btnOrder: {
    alignItems: "center",
    marginBottom: 25,
  },
  containerKeyboard: {
    flex: 1,
  },

  inner: {
    flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: primaryColor,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    padding: 27,
    // alignItems: "center",
  },
  textContainer: {
    width: "100%",
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

  inputContainer: {
    flex: 1,
  },

  input: {
    width: "100%",
    alignSelf: "center",
    marginHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 20 : 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: whiteColor,
    marginBottom: 16,
    borderColor: primaryColor,
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    borderWidth: 1,
  },
  btnContainer: {
    alignSelf: "center",
  },
  closeContainer: {
    position: "absolute",
    right: 20,
    bottom: 220,
  },

  snackbar: {
    marginBottom: Platform.OS === "ios" ? 60 : 90,
  },
});
