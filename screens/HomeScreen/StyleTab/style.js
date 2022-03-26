import { StyleSheet, Platform } from "react-native";
import { title2, body, bold, body2, bold12 } from "../../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },

  containerHorzontalScroll: {
    height: 172,
    alignItems: "center",
    justifyContent: "center",
  },

  horizontalScroll: {
    // backgroundColor: primaryColor,
    flexGrow: 1,
    marginLeft: 16,
    alignItems: "center",
  },

  //text New Style
  textNewStyle: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    color: blackColor,
    marginLeft: 16,
    marginTop: 18,
    marginBottom: 12,
  },

  //text Interior Style
  textInteriorStyle: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    color: blackColor,
    marginBottom: 12,
    marginTop: 18,
    marginLeft: 16,
  },



});
