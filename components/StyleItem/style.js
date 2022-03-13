import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  items: {
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  imageItem: {
    width: 374,
    height: 500,
    borderRadius: 20,
  },

  textStyleView: {
    position: "absolute",
    width: "auto",
    height: "auto",
    padding: 20,
    bottom: 33,
    borderRadius: 10,
    backgroundColor: "rgba(119, 120, 123, 0.7)",
    alignContent: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
