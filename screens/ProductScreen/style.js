import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: "100%",
    paddingTop: 35,
    paddingBottom: 8,
    backgroundColor: "#f9c2ff",
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
  },

  titleBack: {
    fontSize: Platform.OS === "ios" ? 20 : 16,
    fontWeight: "bold",
  },

  flatList: {
    width: "100%",
  },
});
