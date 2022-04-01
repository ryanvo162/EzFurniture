import { StyleSheet, Platform } from "react-native";
import { gray3Color, primaryColor } from "../../global/colors";
import { bold } from "../../global/fonts";

export const styles = StyleSheet.create({
  quantity: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: primaryColor,
    borderRadius: 15,
  },

  quantityButton: {
    width: 30,
    height: 28,
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  quantityText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    transform: [{ translateY: 2 }],
    color: "white",
  },

  quantityNumber: {
    marginHorizontal: 10,
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    transform: [{ translateY: 2 }],
    color: "white",
  },
});
