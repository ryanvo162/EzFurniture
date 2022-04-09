import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator, Pressable } from "react-native";

import * as Icon from "react-native-feather";
import { styles } from "./style";

export default function NotificationItem(props) {
  const { title, image, description, date, onPress, onDelete } = props;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Pressable onPress={onPress} style={styles.items}>
      <View style={styles.imageView}>
        <Image
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{uri: image}}
          style={styles.image}
        />
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator color="gray" />
          </View>
        )}
      </View>

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
