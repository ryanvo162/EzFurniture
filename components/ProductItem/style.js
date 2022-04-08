import { StyleSheet, Platform } from "react-native";
import { bold, body2 } from "../../global/fonts";

export const styles = StyleSheet.create({
  items: {
    flex: 1,
    height: 220,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: "gray",
    borderRadius: 5,
  },

  itemImage: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  infoProduct: {
    position: "absolute",
    width: "75%",
    height: "25%",
    backgroundColor: "rgba(33,33,33,0.75)",
    borderRadius: 10,
    bottom: 20,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    color: "white",
    marginTop: 6,
    marginHorizontal: 12,
    height: 20,
    overflow: "hidden",
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
  },

  price: {
    marginTop: 3,
    fontSize: 14,
    fontFamily: bold.fontFamily,
    marginHorizontal: 12,
    color: "white",
    //backgroundColor:"#212121",
  },

  iconStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 16,
    height: 16,
  },
});
