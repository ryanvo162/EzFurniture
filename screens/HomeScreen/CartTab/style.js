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

  flatList: {
    paddingBottom: 200,
    paddingTop: 50,
  },

  header: {
    position: "absolute",
    width: "100%",
    paddingTop: 55,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },

  title: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    paddingBottom: 4,
    paddingLeft: "3%",
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

  closeContainer: {
    position: "absolute",
    right: 20,
    bottom: 275,
  },

  btnContainer: {
    width: "100%",
    alignItems: "center",
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: gray3Color,
  },

  emptyImage: {
    width: "80%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
