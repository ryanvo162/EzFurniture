import { StyleSheet, Platform } from "react-native";
import { title1, body } from "../../global/fonts";
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
    marginBottom: 45,
    paddingHorizontal: 20,
    textAlign: "justify",
    fontSize: 16,
    fontFamily: body.fontFamily,
    color: "#ffffff",
  },
});
