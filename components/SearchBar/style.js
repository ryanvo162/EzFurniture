import { StyleSheet } from "react-native";
import { primaryColor, whiteColor } from "../../global/colors";
import { title2, body, bold, body2, bold12 } from "../../global/fonts";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    // backgroundColor: "red",
  },
  searchbar: {
    flex: 1,
    backgroundColor: primaryColor,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 16,
    paddingVertical: 12,
    color: "white",
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
  },
  iconSearch: {
    backgroundColor: primaryColor,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
