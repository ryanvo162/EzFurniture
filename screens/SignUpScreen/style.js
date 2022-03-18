import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: Platform.OS === "ios" ? 30 : 23,
    fontWeight: "bold",
    marginTop: Platform.OS === "ios" ? "3%" : 20,
    marginBottom: Platform.OS === "ios" ? 8 : 4,
  },
  subTitleText: {
    fontSize: Platform.OS === "ios" ? 14 : 11,
    marginBottom: Platform.OS === "ios" ? 40 : 35,
  },
  inputTextEmail: {
    marginTop: 1200,
  },
  imageHeader: {
    width: "100%",
    height: "27%",
  },
  textForgotPassword: {
    fontSize: 12,
    color: "#242A37",
    marginLeft: "55%",
  },
  textNote: {
    fontSize: 12,
    color: "#242A37",
    marginTop: 10,
  },
  boldText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
