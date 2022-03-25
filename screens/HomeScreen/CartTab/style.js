import { StyleSheet, Platform } from "react-native";
import { title2} from "../../../global/fonts";

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
    fontSize: title2.fontSize,
    fontFamily: title2.fontFamily,
    backgroundColor: "#EFEEED",
    padding: 5,
    borderRadius: 12,
  },
});
