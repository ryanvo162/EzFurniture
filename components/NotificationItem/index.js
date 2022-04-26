import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, Animated, Easing, Pressable } from "react-native";

import * as Icon from "react-native-feather";
import { styles } from "./style";

export default function NotificationItem(props) {
  const { title, image, description, date, onPress, onDelete } = props;
  const [isLoading, setIsLoading] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;

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
    <Pressable onPress={onPress} style={styles.items}>
      <Animated.View style={[styles.imageView, { opacity: fadeAnim }]}>
        <Image
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{ uri: image }}
          style={styles.image}
        />
      </Animated.View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Pressable onPress={onDelete} style={styles.icon}>
        <Icon.X stroke="black" />
      </Pressable>
      <View style={styles.date}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </Pressable>
  );
}
