import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  items: {
    flex: 1,
    flexDirection: "row",

    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
  },

  imageView: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  loading: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 10,
    marginLeft: 8,
  },

  title: {
    fontSize: Platform.OS === "ios" ? 18 : 14,
    fontWeight: "bold",
    marginBottom: 5,
  },

  description: {
    fontSize: Platform.OS === "ios" ? 12 : 10,
  },

  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  date: {
    position: "absolute",
    bottom: 8,
    right: 12,
  },

  dateText: {
    fontSize: Platform.OS === "ios" ? 12 : 10,
  },
});
