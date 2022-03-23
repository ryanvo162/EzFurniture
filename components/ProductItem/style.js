import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  items: {
    flex: 1,
    height: 260,
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  infoProduct: {
    position: "absolute",
    width: "75%",
    height: "25%",
    backgroundColor: "rgba(221,172,139,0.85)",
    borderRadius: 10,
    bottom: 20,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    color: "white",
    marginTop: 10,
    marginHorizontal: 12,
    //backgroundColor: "pink",
    height: 20,
    overflow: "hidden",
  },

  price: {
    marginTop: 5,
    fontSize: 16,
    marginHorizontal: 12,
    color: "white",
    //backgroundColor:"#212121",
    
    fontWeight: "bold",
  },

  iconStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },

});
