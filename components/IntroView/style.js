import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: 260,
    backgroundColor: "rgba(85,85,85,0.8)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  btnNext: {
    alignItems: "flex-end",
    paddingRight: 30,
    marginTop: Platform.OS === "ios" ? 50 : 30,
  },

  btn: {
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  header: {
    marginLeft: 30,
    marginTop: 40,
    textAlign: "left",
    fontSize: 25,
    color: "#ffffff",
  },

  introText: {
    width: 356,
    marginLeft: 30,
    marginTop: 10,
    textAlign: "left",
    fontSize: 14,
    color: "#ffffff",
  },
});
