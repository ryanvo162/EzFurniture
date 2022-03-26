import { StyleSheet } from "react-native";
import { primaryColor, whiteColor } from "../../global/colors";
import { title2, body, bold, body2, bold12 } from "../../global/fonts";
export const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    marginHorizontal: 16,
    height: 50,
    alignSelf: "center",
    shadowColor: whiteColor,
  }
});
