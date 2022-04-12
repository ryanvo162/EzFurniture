import { StyleSheet, Platform } from "react-native";
import {
  title2,
  title3,
  body,
  bold,
  body2,
  bold12,
} from "../../../global/fonts";
import {
  primaryColor,
  gray2Color,
  gray3Color,
  gray1Color,
  blackColor,
  whiteColor,
} from "../../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },

  header: {
    width: "100%",
    paddingTop: 55,
  },

  title: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    backgroundColor: whiteColor,
    paddingBottom:3,
    paddingLeft: "3%",
  },

  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20%",
  },

  textEmptyCart: {
    fontSize: title3.fontSize,
    fontFamily: title3.fontFamily,
    color: gray3Color,
  },

  btnPayment: {
    width: "100%",
    position: "absolute",
    bottom: 95,
    justifyContent: "center",
    alignItems: "center",
  },
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // marginTop: 20,
  },
  modalView: {
    width: "100%",
    backgroundColor: primaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 26,
   // alignItems: "center",
  },

  containerSubTotal: {
    width: "100%",
    flexDirection: "row",
    // backgroundColor:'red',
    marginBottom: 16,
  },

  titleTotal: {
    flex: 1,
    color: whiteColor,
    // backgroundColor: 'blue',
    fontFamily: title3.fontFamily,
    fontSize: title3.fontSize,
  },

  priceTotal: {
    flex: 1,
    color: whiteColor,
    textAlign: "right",
    // backgroundColor: 'pink',
    fontFamily: bold.fontFamily,
    fontSize: bold.fontSize,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: whiteColor,
  },

  containerTotal: {
    marginTop: 20,
  },
  snackbar: {
    marginBottom: Platform.OS === "ios" ? 60 : 90,
  },

  closeContainer:{
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
  },
});
