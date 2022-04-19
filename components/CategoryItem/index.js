import React, { useRef, useEffect, useState } from "react";
import { Pressable, View, Text, Image, Animated, Easing } from "react-native";
import { body, title3 } from "../../global/fonts";
import { styles } from "./style";

export default function CategoryItem(props) {
  const { id, category, onPress, color, top, right, left, bottom } = props;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);

  const handleChoose = () => {
    onPress(id);
  };

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            delay: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 500,
            easing: Easing.linear,
            delay: 200,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, isLoading]);

  return (
    <Pressable
      onPress={handleChoose}
      style={{
        position: "absolute",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
      }}
    >
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Image
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          style={styles.image}
          source={require("../../assets/img/polygon_home.png")}
        />
        <Text
          style={{
            position: "absolute",
            color: color,
            fontSize: body.fontSize,
            fontFamily: title3.fontFamily,
            textAlign: "center",
          }}
        >
          {category}
        </Text>
      </Animated.View>
    </Pressable>
  );
}
