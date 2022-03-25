import { StyleSheet, Platform } from "react-native";
import { bold, title2} from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
    marginTop: Platform.OS === "ios" ? 55 : 45,
    marginBottom: Platform.OS === "ios" ? 40 : 35,
  },

  titleBack: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
  },

  titleText: {
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    marginLeft: Platform.OS === "ios" ? 40 : 35,
  },

  center: {
    marginTop: Platform.OS === "ios" ? 40 : 30,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    marginTop: Platform.OS === "ios" ? 55 : 45,
    marginBottom: Platform.OS === "ios" ? 45 : 35,
    resizeMode:'contain',
    width: 200,
    height: 200,
  },
});
