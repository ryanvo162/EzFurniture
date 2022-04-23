import { StyleSheet, Platform } from "react-native";
import { whiteColor } from "../../global/colors";
import { bold, title2 } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  inner: {
    flex: 1,
  },

  header: {
    position: "absolute",
    backgroundColor: whiteColor,
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 12,
    marginBottom: 16,
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
    backgroundColor: "rgba(255,255,255,0.95)",
  },

  titleBack: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    marginLeft: 12,
    color: "black",
    transform: [{ translateY: 1 }],
  },

  titleText: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    marginLeft: 34,
  },

  scrollView: {
    flexGrow: 1,
    paddingTop: 150,
    paddingBottom: 50,
  },

  center: {
    alignItems: "center",
    marginTop: 20,
  },

  image: {
    marginTop: 60,
    marginBottom: 60,
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
});
