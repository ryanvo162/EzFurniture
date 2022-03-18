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
    bottom: 33,
    borderRadius: 10,
    backgroundColor: "rgba(119, 120, 123, 0.7)",
    alignContent: "center",
    justifyContent: "center",
  },

  loading: {
    position: "absolute",
    flex: 1,
    bottom: "50%",
  },

  textStyle: {
    fontSize: Platform.OS === "ios" ? 20 : 17,
    margin: 10,
    color: "white",
  },
});
