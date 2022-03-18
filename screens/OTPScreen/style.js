import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    // justifyContent: "center",
  },
  titleText: {
    fontSize: Platform.OS === "ios" ? 30 : 23,
    fontWeight: "bold",
    marginTop: Platform.OS === "ios" ? 80 : 70,
    marginBottom: Platform.OS === "ios" ? 12 : 6,
  },

  subTitleText: {
    marginTop: Platform.OS === "ios" ? 32 : 16,
    fontSize: Platform.OS === "ios" ? 16 : 12,
  },
  subTitleTextOne: {
    fontSize: Platform.OS === "ios" ? 16 : 12,
    marginBottom: Platform.OS === "ios" ? 32 : 20,
  },

  textView: {
    // backgroundColor: "red",
    width: "100%",
    paddingLeft: "10%",
  },

  inputTextEmail: {
    marginTop: 1200,
  },
  imageHeader: {
    width: "100%",
    height: "25%",
  },
  timeVerify: {
    fontSize: Platform.OS === "ios" ? 16 : 12,
    fontWeight: "bold",
  },
});
