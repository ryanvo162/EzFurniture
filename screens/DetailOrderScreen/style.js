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
    flex: 1,
    backgroundColor: whiteColor,
  },

  scrollView: {
    flexGrow: 1,
    paddingTop: 90,
    backgroundColor: whiteColor,
    paddingHorizontal: 16,
  },

  header: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.95)",
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 12,
    marginBottom: 16,
  },

  headerLeft: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },

  headerLeftText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    // transform: [{ translateY: 2 }],
    color: "black",
    marginLeft: 10,
  },

  infoOrder: {
    padding: 8,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: gray3Color,
    borderRadius: 5,
  },
  infoOrderItem: {
    marginHorizontal: 12,
  },

  titleOrder: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    color: primaryColor,
    width: "100%",
    textAlign: "left",
  },

  infoOrderText: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    color: whiteColor,
    marginVertical: 4,
  },

  infoTextInline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
