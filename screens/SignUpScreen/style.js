import { StyleSheet, Platform } from "react-native";
import { body, title1,bold12, body2} from "../../global/fonts";
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
  },
  subTitleText: {
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    marginTop: 12,
    marginBottom: 18,
  },

  imageHeader: {
    width: "100%",
    height: 220,
    marginBottom: 40,
  },

  textNote: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    color: "black",
    marginTop: 10,
  },

  boldText: {
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
  },
});
