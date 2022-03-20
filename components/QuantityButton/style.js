import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
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
    fontSize: Platform.OS === "ios" ? 20 : 16,
    fontWeight: "bold",
    color: "white",
  },

  quantityNumber: {
    marginHorizontal: 12,
    fontSize: Platform.OS === "ios" ? 19 : 15,
  },
});
