import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  items: {
    marginBottom: 12,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
  },

  infoProduct: {
    // backgroundColor: "red",
    marginLeft: "2%",
  },

  imageItem: {
    width: 140,
    height: 120,
    // resizeMode: "contain",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "gray",
    marginLeft: 12,
  },

  name: {
    fontSize: Platform.OS === "ios" ? 20 : 17,
    marginBottom: Platform.OS === "ios" ? 8 : 4,
  },

  price: {
    fontSize: Platform.OS === "ios" ? 20 : 17,
    marginBottom: Platform.OS === "ios" ? 8 : 4,
  },

  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButton: {
    width: 40,
    height: 28,
    backgroundColor: "#636363",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  quantityText: {
    fontSize: Platform.OS === "ios" ? 20 : 17,
    fontWeight: "bold",
    color: "white",
  },

  quantityNumber: {
    marginHorizontal: 12,
    fontSize: Platform.OS === "ios" ? 19 : 15,
  },
});
