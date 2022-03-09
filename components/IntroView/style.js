import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 260,
    backgroundColor: "rgba(85,85,85,0.8)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  btnNext: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    marginLeft: 320,
    marginTop: 50,
    borderRadius:50,
    
  },
  
  btnText:{
    fontSize : 16,
    color: "#212121",
    
  },
  header: {
    marginLeft: 30,
    marginTop: 40,
    textAlign: "left",
    fontSize: 25,
    color: "#ffffff",
    // fontFamily: "Montserrat",
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
