import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { primaryColor ,whiteColor} from "../../global/colors";
import { title2, title3, body, bold, body2, bold12 } from "../../global/fonts";

// import { styles } from "./style";

export default function ButtonApp(props) {
  const { onPress, text, color, textColor } = props;

  const stylesButton = StyleSheet.create({
    buttons: {
      width: 298,
      height: 50,
      borderRadius: 10,
      marginTop: 12,
      backgroundColor: color == null ? primaryColor : color,
      justifyContent: "center",
      alignItems: "center",
    },
    textButton: {
      fontSize: bold.fontSize,
      fontFamily: bold.fontFamily,
      color: textColor == null ? whiteColor : textColor,
      transform: [{ translateY: 1 }],
    },
  });
  
  return (
    <Pressable onPress={onPress} style={stylesButton.buttons}>
      <Text style={stylesButton.textButton}>{text}</Text>
    </Pressable>
  );
}
