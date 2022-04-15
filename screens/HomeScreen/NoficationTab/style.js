import { StyleSheet, Platform } from "react-native";
import {  bold } from "../../../global/fonts";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEEED",
  },

  flatList: {
    width: "100%",
  },

  header: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 8,
    backgroundColor: "rgba(239, 238, 237, 0.95)",
  },

  headerLeft: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },

  headerReadingText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    marginLeft: 12,
    transform: [{ translateY: 2 }],
  },

  headerRight: {
    flex: 1,
    marginRight: "5%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  snackbar: {
    marginBottom: Platform.OS === "ios" ? 60 : 90,
  },
});
