import { StyleSheet, Platform } from "react-native";
import { bold, body2, bold12 } from "../../global/fonts";
import { primaryColor, gray3Color } from "../../global/colors";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "white",
  },
  inner: {
    flex: 1,
    // alignItems: "center",
  },

  containerScrollView: {
    flexGrow: 1,
    paddingBottom: 100,
  },

  header: {
    backgroundColor: primaryColor,
    width: "100%",
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 12,
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
    transform: [{ translateY: 1 }],
    color: "white",
    marginLeft: 10,
  },

  headerRight: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 21,

  },

  avatarView: {
    width: 142,
    height: 142,
    position: "absolute",
    alignSelf: "center",
    bottom: -65,
    backgroundColor: "gray",
    borderRadius: 100,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  containerImage: {
    width: "100%",
    height: 200,
    backgroundColor: primaryColor,
    marginBottom: 118,
  },

  textTitleInput: {
    marginHorizontal: "6%",
    marginBottom: 8,
    fontSize: bold12.fontSize,
    fontFamily: bold12.fontFamily,
  },

  textInput: {
    fontSize: body2.fontSize,
    fontFamily: body2.fontFamily,
    borderRadius: 5,
    paddingHorizontal: 16,
    alignSelf: "center",
    paddingVertical: 12,
    borderColor: gray3Color,
    borderWidth: 1,
    width: "90%",
    marginBottom: 16,
  },
  buttonView: {
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    bottom: 25,
  },
  snackbar: {
    marginBottom: Platform.OS === "ios" ? 80 : 110,
    backgroundColor: gray3Color,
  },
});
