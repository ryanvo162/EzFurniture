import { StyleSheet, Platform } from "react-native";
import { primaryColor, gray2Color } from "../../global/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  imageContainer: {
    width: "100%",
    height: "50%",
    position: "absolute",
    backgroundColor: "gray",
  },

  scrollViewContain: {
    top: 0,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? "100%" : " 90%",
  },

  // Modal
  modalContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "5%",
    paddingBottom: "30%",
  },

  crossBar: {
    width: "20%",
    alignSelf: "center",
    height: 3,
    borderRadius: 20,
    backgroundColor: gray2Color,
    transform: [{ translateY: -10 }],
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: "1%",
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: primaryColor,
  },

  descriptionTilte: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "3%",
    marginBottom: "1%",
    color: primaryColor,
  },

  description: {
    fontSize: 12,
  },

  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    paddingTop: Platform.OS === "ios" ? 10 : 8,
    paddingBottom: Platform.OS === "ios" ? 24 : 8,
    bottom: 0,
  },

  buttonBuy: {
    width: "70%",
    height: 50,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "4%",
  },

  buttonCart: {
    width: 50,
    height: 50,
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: "3%",
    color: "#ffffff",
  },

  snackbar:{
    marginBottom: "18%",
  },

  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
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
