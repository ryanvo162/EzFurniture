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
  containerKeyboard: {
    flex: 1,
  },

  inner: {
    flex: 1,
  },

  header: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.95)",
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 12,
    marginBottom: 16,
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
    transform: [{ translateY: 2 }],
    color: "black",
    marginLeft: 10,
  },

  textDelivery: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: blackColor,
  },
  newDeliveryContainer: {
    backgroundColor: gray1Color,
    borderRadius: 5,
    paddingTop: 13,
    paddingBottom: 13,
    marginBottom: 16,
    marginHorizontal: 18,
  },
  btnNewDelivery: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  textNewDelivery: {
    fontSize: title3.fontSize,
    fontFamily: title3.fontFamily,
    color: blackColor,
  },

  centeredView: {
    flex: 1,
  },

  modalView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: primaryColor,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    padding: 26,
  },

  textInput: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === "ios" ? 21 : 15,
    backgroundColor: whiteColor,
    width: "100%",
    marginBottom: 12,
  },

  buttonContainer: {
    alignSelf: "center",
  },
});
