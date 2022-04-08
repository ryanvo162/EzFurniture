import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  Pressable,
} from "react-native";
import { styles } from "./style";

export default function StyleItem(props) {
  const { id, name, image, onPress } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handlePress = () => {
    onPress(id);
  };
  return (
    <Pressable style={styles.items} onPress={handlePress}>
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
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator color="white" />
          </View>
        )}
        <View style={styles.textStyleView}>
          <Text style={styles.textStyle}> {props.name} </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
