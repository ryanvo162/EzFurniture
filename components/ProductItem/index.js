import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import { formatDisplayPrice } from "../../global/format";

export default function ProductItem(props) {
  const { name, image, price, onPress, id } = props;
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
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
    <Pressable onPress={handleChoose} style={styles.items}>
      <Animated.View style={[styles.anim, { opacity: fadeAnim }]}>
        <ImageBackground
          borderRadius={5}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={
            image !== "Error: No files found"
              ? { uri: image }
              : require("../../assets/img/error.png")
          }
          style={styles.itemImage}
        >
          <View style={styles.infoProduct}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
              {name}
            </Text>
            <Text style={styles.price}>{formatDisplayPrice(price)}</Text>
            <Icon.Heart
              stroke={"white"}
              width={16}
              height={16}
              style={styles.iconStyle}
            />
          </View>
        </ImageBackground>
      </Animated.View>
    </Pressable>
  );
}
