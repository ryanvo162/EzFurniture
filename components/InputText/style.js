import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  textInput: {
    fontSize: Platform.OS === "ios" ? 15 : 11,
    borderRadius: 10,
    paddingHorizontal: 34,
    paddingVertical: Platform.OS === "ios" ? 21 : 15,
    backgroundColor: "#77787B",
    width: "100%",
    marginBottom: 12,
  },
});
