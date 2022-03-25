import { StyleSheet, Platform } from "react-native";
import { title1, body } from "../../global/fonts";
import { gray2Color } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: 260,
    backgroundColor: "rgba(85,85,85,0.8)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  btnNext: {
    alignItems: "flex-end",
    paddingRight: 30,
    marginTop: 30,
  },

  btn: {
    backgroundColor: gray2Color,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  header: {
    marginLeft: 30,
    marginTop: 40,
    textAlign: "left",
    fontSize: title1.fontSize,
    fontFamily: title1.fontFamily,
    color: "#ffffff",
  },

  introText: {
    width: 356,
    marginLeft: 30,
    marginTop: 10,
    textAlign: "left",
    fontSize: body.fontSize,
    fontFamily: body.fontFamily,
    color: "#ffffff",
  },
});
