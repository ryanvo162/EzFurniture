import { StyleSheet, Platform } from "react-native";
import { primaryColor, gray3Color, gray2Color } from "../../global/colors";
import { bold12, body2 } from "../../global/fonts";

export const styles = StyleSheet.create({
  items: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
    borderColor: primaryColor,
    borderWidth: 0.5,
  },

  imageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "75%",
    height: "75%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    resizeMode: "contain",
  },

  loading: {
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 2,
    marginVertical: 6,
    marginLeft: 16,
    marginRight: 16,
  },

  innerContent: {
    flexDirection: "row",
    marginVertical: 2.5,
    alignItems: "center",
  },

  titleItem: {
    flex: 1,
    fontSize: bold12.fontSize,
    fontFamily:bold12.fontFamily,
  },

  contentItem: {
    flex: 2,
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
  },
});
