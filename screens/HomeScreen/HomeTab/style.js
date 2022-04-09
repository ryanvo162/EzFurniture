import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  image: {
    flex: 1,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  snackbar: {
    marginBottom: Platform.OS === "ios" ? 200 : 230,
  },
});
