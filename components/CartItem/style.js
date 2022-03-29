import { StyleSheet, Platform } from "react-native";
import { bold, body } from "../../global/fonts";
import { primaryColor } from "../../global/colors";
export const styles = StyleSheet.create({
  items: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 12,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 5,
    borderColor: primaryColor,
    borderWidth: 1,
  },

  infoProduct: {
    marginLeft: "2%",
  },    

  imageItem: {
    width: 140,
    height: 120,
    marginVertical: 10,
    borderRadius: 5,
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
