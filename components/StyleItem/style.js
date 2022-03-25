import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  items: {
    flex: 1,
    height: 300,
    marginHorizontal: "3%",
    marginVertical: 8,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: Platform.OS === "ios" ? 20 : 17,
    margin: 10,
    color: "white",
  },
});
