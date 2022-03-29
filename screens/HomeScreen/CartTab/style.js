import { StyleSheet, Platform } from "react-native";
import { title2, title3, body, bold, body2, bold12 } from "../../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../../global/colors";

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
    paddingLeft: "3%",
  },

  btnPayment: {
    width: "100%",
    position: "absolute",
    bottom: 106,
    justifyContent: "center",
    alignItems: "center",
  },
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 20,
  },
  modalView: {
    width: "100%",
    backgroundColor: primaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 26,
    alignItems: 'center',
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

});
