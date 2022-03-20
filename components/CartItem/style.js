import { StyleSheet, Platform } from "react-native";

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
    fontSize: Platform.OS === "ios" ? 20 : 16,
    marginBottom: Platform.OS === "ios" ? 8 : 4,
  },

  price: {
    fontSize: Platform.OS === "ios" ? 20 : 16,
    marginBottom: Platform.OS === "ios" ? 8 : 4,
  },
});
