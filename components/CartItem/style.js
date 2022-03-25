import { StyleSheet, Platform } from "react-native";
import { bold, body } from "../../global/fonts";
export const styles = StyleSheet.create({
  items: {
    flex: 1,
    marginHorizontal: "3%",
    marginVertical: 6,
    marginHorizontal: "2%",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
  },

  infoProduct: {
    marginLeft: "2%",
  },

  imageItem: {
    width: 140,
    height: 120,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "gray",
    marginLeft: 12,
  },

  name: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    textAlignVertical: "center",
  },

  price: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    marginBottom: 8,
  },
});
