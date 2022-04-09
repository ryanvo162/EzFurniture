import { StyleSheet, Platform } from "react-native";
import { title2, body } from "../../global/fonts";
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
    flex: 1,
    height: 360,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
