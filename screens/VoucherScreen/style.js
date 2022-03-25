import { StyleSheet, Platform } from "react-native";
import { body } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  flatList: {
    width: "100%",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 12,
  },

  headerLeft: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },

  headerLeftText: {
    fontSize: body.fontSize,
    fontFamily:body.fontFamily,
    marginLeft: 10,
  },
});
