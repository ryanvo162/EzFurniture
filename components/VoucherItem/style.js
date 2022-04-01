import { StyleSheet, Platform } from "react-native";
import { primaryColor, gray3Color, gray2Color } from "../../global/colors";
import { title2, body, bold } from "../../global/fonts";

export const styles = StyleSheet.create({
  items: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },

  imageView: {
    marginVertical: 10,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  loading: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  crossBar: {
    borderColor: gray2Color,
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderRadius: 1,
    height: "100%",
  },

  content: {
    flex: 1,
    marginVertical: 35,
    marginLeft: 16,
  },

  title: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    marginBottom: 5,
  },

  description: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
  
  },

  dateText: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    color: gray3Color,
  },

  buttonSave: {
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 5,
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    marginVertical: 5,
    marginHorizontal: 15,
    color: "#ffffff",
  },
});
