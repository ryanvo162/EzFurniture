import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEEED",
  },
  header: {
    width: "100%",
    position: "absolute",
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: Platform.OS === "ios" ? 30 : 26,
    fontWeight: "bold",
    backgroundColor: "#EFEEED",
    padding: 5,
    borderRadius: 12,
  },
});
