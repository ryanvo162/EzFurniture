import { StyleSheet, Platform } from "react-native";
import { bold } from "../../global/fonts";

export const styles = StyleSheet.create({
  buttons: {
    width: 298,
    height: 50,
    borderRadius: 10,
    marginTop: 12,
    backgroundColor: "#DDAC8B",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: "white",
    transform: [{ translateY: 1 }],
  },
});
