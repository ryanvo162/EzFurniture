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
    fontSize: Platform.OS === "ios" ? 14 : 11,
    marginBottom: Platform.OS === "ios" ? 40 : 35,
  },
  inputTextEmail: {
    marginTop: 1200,
  },
  imageHeader: {
    width: "100%",
    height: "25%",
  },
  textForgotPassword:{
    fontSize:12,
    color: "#242A37",
    // marginTop:2,
    marginLeft:"55%",
  },
  textNote:{
    fontSize:12,
    color:"#242A37",
    marginTop:10,

  },
  boldText:{
    fontSize:12,
    fontWeight:"bold",

  },
});
