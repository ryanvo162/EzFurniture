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

  scrollView: {
    flexGrow: 1,
    paddingTop: 90,
    paddingBottom: 20,
    backgroundColor: whiteColor,
  },

  header: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.95)",
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 8,
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
    transform: [{ translateY: 1 }],
    color: blackColor,
    marginLeft: 10,
  },
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 34,
  },
  input: {
    borderRadius: 5,
    backgroundColor: whiteColor,
    borderColor: primaryColor,
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: Platform.OS === "ios" ? 19 : 13,
    marginTop: 12,
  },

  buttonContainer: {
    alignItems: "center",
    marginTop: 16,
  },

  image: {
    position: "absolute",
    width: 360,
    height: 360,
    right: -30,
    top: 26,
    resizeMode: "contain",
    // backgroundColor: "red",
  },
});
