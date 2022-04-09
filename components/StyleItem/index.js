import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  Animated,
  Pressable,
  Easing,
} from "react-native";
import { styles } from "./style";

export default function StyleItem(props) {
  const { id, name, image, onPress } = props;
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const handlePress = () => {
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
    <Pressable style={styles.items} onPress={handlePress}>
      <Animated.View style={[styles.anim, { opacity: fadeAnim }]}>
        <ImageBackground
          borderRadius={5}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          style={styles.itemImage}
          resizeMode="cover"
          source={
            image !== "Error: No files found"
              ? { uri: image }
              : {
                  uri: "https://picsum.photos/1000",
                }
          }
        >
          <View style={styles.textStyleView}>
            <Text style={styles.textStyle}> {name} </Text>
          </View>
        </ImageBackground>
      </Animated.View>
    </Pressable>
  );
}
