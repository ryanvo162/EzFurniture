import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { styles } from "./style";

export default function StyleNewItem(props) {
  const { name, image, id, onPress } = props;
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
    <>
      <Pressable onPress={handleChoose} style={styles.items}>
        <Animated.View style={[styles.anim,{ opacity: fadeAnim }]}>
          <ImageBackground
            borderRadius={5}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            style={[styles.itemImage]}
            resizeMode="cover"
            source={{ uri: image }}
          >
            <View style={styles.textStyleView}>
              <Text style={styles.textStyle}> {props.name} </Text>
            </View>
          </ImageBackground>
        </Animated.View>
      </Pressable>
    </>
  );
}
