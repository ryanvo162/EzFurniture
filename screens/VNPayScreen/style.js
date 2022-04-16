import { StyleSheet, Platform } from "react-native";
import { bold } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  webView: {
    flex: 1,
    marginTop: 90,
  },
  btnBack: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingLeft: 20,
    paddingTop: 55,
    paddingBottom: 5,
    width: "100%",
  },
  textBack: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
  },
});
