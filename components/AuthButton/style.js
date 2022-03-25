import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageAuth: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 45,
    height: 45,
    marginHorizontal: Platform.OS === "ios" ? 8 : 4,
  },
});
