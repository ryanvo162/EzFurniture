import { StyleSheet, Platform } from "react-native";
import { title2 } from "../../global/fonts";
export const styles = StyleSheet.create({
  items: {
    flex: 1,
    height: 500,
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
    fontSize: title2.fontSize,
    fontFamily:title2.fontFamily,
    margin: 10,
    color: "white",
  },
});
