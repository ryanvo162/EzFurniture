import { StyleSheet, Platform } from "react-native";
import { title1, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray3Color, gray2Color } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  inputTextEmail: {
    marginTop: 1200,
  },

  imageHeader: {
    width: "100%",
    height: 220,
    marginBottom: 20,
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 30,
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
