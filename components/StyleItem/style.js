import { StyleSheet, Platform } from "react-native";
import { title2, body } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";
export const styles = StyleSheet.create({
  items: {
    flex: 1,
    height: 360,
    marginHorizontal: 16,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  itemImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: gray3Color,
  },

  anim: {
    width: "100%",
    height: "100%",
  },

  textStyleView: {
    position: "absolute",
    width: "auto",
    height: "auto",
    bottom: 33,
    borderRadius: 5,
    backgroundColor: "rgba(33, 33, 33, 0.75)",
    alignItems: "center",
    justifyContent: "center",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    margin: 10,
    color: "white",
  },
});
