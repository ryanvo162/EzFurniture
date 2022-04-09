import { StyleSheet, Platform } from "react-native";
import { title1, body2, bold12, bold } from "../../global/fonts";
import { primaryColor, gray3Color, gray2Color } from "../../global/colors";

export const styles = StyleSheet.create({
  items: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
  },

  imageView: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,
    height: 100,
    backgroundColor: gray2Color,
    borderRadius: 100,
  },

  loading: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    marginVertical: 25,
    marginLeft: 12,
  },

  title: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: primaryColor,
  },

  description: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
  },

  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  date: {
    position: "absolute",
    bottom: 8,
    right: 12,
  },

  dateText: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular_Italic",
    color: primaryColor,
  },
});
