import { StyleSheet, Platform } from "react-native";
import { bold, body } from "../../global/fonts";
import { primaryColor } from "../../global/colors";
export const styles = StyleSheet.create({
  items: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 5,
    borderColor: primaryColor,
    borderWidth: 1,
  },

  infoProduct: {
    marginLeft: "2%",
    flex: 1,
  },

  imageItem: {
    width: 140,
    height: 120,
    borderRadius: 5,
    backgroundColor: "gray",
  },

  name: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
  },

  price: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    marginBottom: 8,
  },

  quantityButton: {
    flexDirection: "row",
    width: "100%",
  },
  
});
