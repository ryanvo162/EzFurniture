import { StyleSheet, Platform } from "react-native";
import { primaryColor, gray2Color } from "../../global/colors";
import { bold, title2, title1, body } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  imageContainer: {
    width: "100%",
    height: "50%",
    position: "absolute",
    backgroundColor: gray2Color,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  loading: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    position: "absolute",
    // backgroundColor: primaryColor,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 12,
    zIndex: 1,
  },

  headerLeft: {
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },
  headerLeftText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    transform: [{ translateY: 1 }],
    color: "black",
    marginLeft: 10,
  },

  headerRight: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: 24,
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

  containerTitle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    fontSize: title1.fontSize,
    fontFamily: title1.fontFamily,
    transform: [{ translateY: 3 }],
    marginBottom: "1%",
  },

  price: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    color: primaryColor,
  },

  descriptionTilte: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    marginTop: "3%",
    marginBottom: "1%",
    color: primaryColor,
  },

  description: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
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
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    marginHorizontal: "3%",
    color: "#ffffff",
  },

  snackbar: {
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
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
  },
});
