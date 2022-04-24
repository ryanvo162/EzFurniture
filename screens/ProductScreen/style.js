import { StyleSheet, Platform } from "react-native";
import { gray2Color, gray3Color } from "../../global/colors";
import { bold } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  inner: {
    flex: 1,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 16,
  },

  headerLeft: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },

  headerLeftText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    marginLeft: 10,
  },

  headerRight: {
    flex: 1,
    marginRight: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  flatList: {
    width: "100%",
    paddingHorizontal: 8,
  },

  searchbar: {
    marginBottom: 16,
  },

  emptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: bold.fontSize,
    fontFamily: bold.fontFamily,
    color: gray2Color,
  },
});
