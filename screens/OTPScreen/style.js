import { StyleSheet, Platform } from "react-native";
import { title1, body, bold12 } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "white",
  },
  
  inner: {
    flex: 1,
    // alignItems: "center",
  },

  titleText: {
    fontSize: title1.fontSize,
    fontFamily: title1.fontFamily,
    marginTop: Platform.OS === "ios" ? 80 : 70,
    marginBottom: Platform.OS === "ios" ? 12 : 6,
  },

  subTitleText: {
    marginTop: Platform.OS === "ios" ? 32 : 16,
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
  },

  subTitleTextOne: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    marginBottom: Platform.OS === "ios" ? 32 : 20,
  },

  textView: {
    width: "100%",
    paddingHorizontal: "6%",
  },

  inputTextEmail: {
    marginTop: 1200,
  },
  imageHeader: {
    width: "100%",
    height: "25%",
  },
  timeVerify: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
  },
});
