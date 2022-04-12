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
  items: {
    flexDirection: "row",
    backgroundColor: gray1Color,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },

  image: {
    width: 90,
    height: 90,
    backgroundColor: whiteColor,
    borderRadius: 5,
  },

  infoProduct: {
    flex: 1,
    marginLeft: 7,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  productName: {
    fontSize: title3.fontSize,
    fontFamily: title3.fontFamily,
    color: blackColor,
  },

  total: {
    flexDirection: "row",
    backgroundColor: gray3Color,
  },

  price: {
    fontSize: title3.fontSize,
    fontFamily: title3.fontFamily,
    color: blackColor,
    // marginRight: 180,
  },

  quantity: {
    fontSize: title3.fontSize,
    fontFamily: title3.fontFamily,
    color: gray3Color,
  },
});
