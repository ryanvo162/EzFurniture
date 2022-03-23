import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 8,
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
    marginLeft: 10,
  },

  headerRight: {
    flex: 1,
    marginRight: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  iconSearch: {
    marginRight: 14,
  },

  flatList: {
    width: "100%",
  },
});
