import { StyleSheet, Platform } from "react-native";
import { gray2Color, primaryColor } from "../../../global/colors";
import { bold } from "../../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray2Color,
  },

  image: {
    flex: 1,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  snackbar: {
    marginBottom: Platform.OS === "ios" ? 200 : 230,
  },

  buttonNext: {
    position: "absolute",
    right: 0,
    padding: 10,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  buttonBack: {
    position: "absolute",
    left: 0,
    padding: 10,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  buttonNextIcon: {
    marginRight: 10,
  },

  buttonBackIcon: {
    marginLeft: 10,
  },
});
