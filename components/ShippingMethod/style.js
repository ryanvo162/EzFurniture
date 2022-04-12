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
    borderRadius: 5,
    padding: 10,
    backgroundColor: "rgba(221, 172, 139, 0.2)",
  },

  textShippingMethod: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: primaryColor,
  },

  line2: {
    marginVertical: 5,
    height: 1,
    backgroundColor: primaryColor,
  },

  statusFast: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textStatus: {
    flex: 1,
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
    color: blackColor,
  },

  price: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  textPrice: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: blackColor,
    marginRight: 5,
  },

  dateDelivery: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: blackColor,
    marginTop: 4,
  },
  voucherDelivery: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: gray3Color,
    marginVertical: 4,
  },
});
