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
  item: {
    flex: 1,
    // backgroundColor: gray3Color,
    // marginHorizontal: 16,
    marginVertical: 8,
  },

  image: {
    height: 200,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: gray2Color,
    // resizeMode: "cover",
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginVertical: 3,
  },

  titleText: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: blackColor,
  },

  valueText: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: blackColor,
  },

  line: {
    height: 1,
    backgroundColor: blackColor,
    marginTop: 16,
  },
});
