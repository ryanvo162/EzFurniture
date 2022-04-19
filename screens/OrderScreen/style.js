import { StyleSheet, Platform } from "react-native";
import { gray2Color, gray3Color } from "../../global/colors";
import { body, bold } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  flatList: {
    width: "100%",
  },

  header: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.95)",
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 12,
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
    marginLeft: 10,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: gray3Color,
  },

  emptyImage: {
    width: "80%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
