import { StyleSheet, Platform } from "react-native";
import { title2,body, body2 } from "../../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#DDAC8B",
    // justifyContent: "center",
  },
  profileUser: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
  },

  imageUser: {
    width: 124,
    height: 124,
    backgroundColor: "gray",
    borderRadius: 100,
    marginRight: 20,
  },

  profileInfoUser: {
    justifyContent: "center",
  },

  nameUser: {
    fontSize: title2.fontSize,
    fontFamily:title2.fontFamily,
    color: "white",
    marginBottom: 8,
  },

  gmailUser: {
    fontSize: body.fontSize,
    fontFamily:body.fontFamily,
    color: "white",
  },

  functionsList: {
    alignItems: "center",
    paddingTop: 45,
  },

  items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    paddingHorizontal: "5%",
  },

  itemsText: {
    marginLeft: 30,
    fontSize: 16,
    fontFamily: body2.fontFamily,
    color: "white",
  },

  iconNext: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },

  hr: {
    backgroundColor: "white",
    width: "90%",
    height: 1,
    marginVertical: 14,
  },
});
