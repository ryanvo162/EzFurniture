import { StyleSheet, Platform } from "react-native";
import { title2,body } from "../../global/fonts";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";
export const styles = StyleSheet.create({
  items: {
    flex: 1,
    height: 172,
    width: 280,
    marginRight: 16,
    backgroundColor: gray3Color,
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
  },

  textStyleView: {
    position: "absolute",
    width: "auto",
    height: "auto",
    bottom: 16,
    borderRadius: 10,
    backgroundColor: "rgba(33, 33, 33, 0.75)",
    alignContent: "center",
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
