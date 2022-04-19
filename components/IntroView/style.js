import { StyleSheet, Platform } from "react-native";
import { title1, body, title3 } from "../../global/fonts";
import { gray2Color } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "rgba(50,50,50,0.6)",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  introText: {
    marginTop: 28,
    marginBottom: 70,
    paddingHorizontal: 30,
    textAlign: "justify",
    fontSize: body.fontSize,
    // fontFamily: title3.fontFamily,
    color: "#ffffff",
  },
});
