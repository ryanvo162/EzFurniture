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
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  infoProduct: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(33,33,33,0.75)",
    borderRadius: 10,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    color: "white",
    marginBottom: 3,
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
  },

  price: {
    fontSize: 14,
    fontFamily: bold.fontFamily,
    color: "white",
    transform: [{ translateY: 2 }],
    // backgroundColor:"#212121",
  },

  iconStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
