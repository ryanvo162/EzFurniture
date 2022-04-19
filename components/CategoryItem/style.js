import { StyleSheet, Platform } from "react-native";
import {blackColor, gray3Color, primaryColor} from "../../global/colors";
export const styles = StyleSheet.create({
  image: {
    width: 85,
    height: 85,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: blackColor,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    // backgroundColor: primaryColor,
  },
});
