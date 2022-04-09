import React, { useRef, useEffect, useState } from "react";
import { styles } from "./style";
import { View, Text, Animated, Button } from "react-native";

export default function LoadingStyle() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [hide, setHide] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          delay: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 500,
          delay: 200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <>
      <Animated.View
        style={[
          styles.items,
          {
            opacity: fadeAnim,
          },
        ]}
      ></Animated.View>
    </>
  );
}
