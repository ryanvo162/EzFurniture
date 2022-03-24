import { StyleSheet, Platform } from "react-native";

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
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
