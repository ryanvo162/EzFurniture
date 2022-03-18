import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
    // marginTop: Platform.OS === "ios" ? 55 : 45,
    // marginBottom: Platform.OS === "ios" ? 40 : 35,
  },

  titleBack: {
    fontSize: Platform.OS === "ios" ? 20 : 16,
    fontWeight: "bold",
  },

  flatList: {
    // paddingTop: 100,
    width: "100%",
  },

  header: {
    width: "100%",
    paddingTop: 35,
    paddingBottom: 5,
    backgroundColor: "#f9c2ff",
  },
});
