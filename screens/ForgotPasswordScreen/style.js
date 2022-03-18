import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
    marginTop: Platform.OS === "ios" ? 55 : 45,
    marginBottom: Platform.OS === "ios" ? 40 : 35,
  },

  titleBack: {
    fontSize: Platform.OS === "ios" ? 16 : 14,
    fontWeight: "bold",
  },

  titleText: {
    fontWeight: "bold",
    fontSize: Platform.OS === "ios" ? 22 : 18,
    marginLeft: Platform.OS === "ios" ? 40 : 35,
  },

  center: {
    marginTop: Platform.OS === "ios" ? 40 : 30,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    marginTop: Platform.OS === "ios" ? 55 : 45,
    marginBottom: Platform.OS === "ios" ? 45 : 35,
    resizeMode:'contain',
    width: 200,
    height: 200,
  },
});
