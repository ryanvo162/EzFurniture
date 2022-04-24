import { StyleSheet, Platform } from "react-native";
import { title1, body2, body, bold12 } from "../../global/fonts";
import {
  primaryColor,
  gray3Color,
  gray2Color,
  blackColor,
} from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "white",
  },
  inner: {
    flex: 1,
  },

  inputTextEmail: {
    marginTop: 1200,
  },

  imageHeader: {
    width: "100%",
    height: 220,
    marginBottom: 40,
  },
  
  textLogin: {
    fontSize: title1.fontSize,
    fontFamily: title1.fontFamily,
    color: blackColor,
  },

  textWelcome: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    color: blackColor,
    marginTop: 12,
    marginBottom: 40,
  },

  textForgotPassword: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: "black",
    marginLeft: "54%",
    marginBottom: 16,
  },

  textNote: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: "black",
    marginTop: 12,
  },

  boldText: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
  },
});
