import { StyleSheet, Platform } from "react-native";
import { body } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  textInput: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === "ios" ? 21 : 15,
    backgroundColor: "#77787B",
    width: "100%",
    marginBottom: 12,
  },
});
