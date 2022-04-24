import { StyleSheet } from "react-native";
import { body, bold } from "../../global/fonts";
import { whiteColor } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  pagerView: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    position: "absolute",
    bottom: 28,
    right: 28,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.25)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
  },

  buttonText: {
    fontSize: bold.fontSize,
    fontFamily: body.fontFamily,
    color: whiteColor,
    marginRight: 10,
  },

  buttonNext: {
    position: "absolute",
    right: 5,
    padding: 10,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  swipe: {
    width: 6,
    height: "20%",
    backgroundColor: "white",
    borderRadius: 5,
  },

  textButtonNext: {
    marginRight: 10,
    color: "white",
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
  },
});
