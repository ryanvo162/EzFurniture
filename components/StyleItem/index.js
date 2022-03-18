import React,{useState} from 'react'
import { View, Text, Image, ActivityIndicator } from "react-native";
import { styles } from "./style";

export default function StyleItem(props) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.items}>
      <Image
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={styles.imageItem}
        resizeMode="cover"
        source={props.source}
      />
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator color="gray" />
        </View>
      )}
      <View style={styles.textStyleView}>
        <Text style={styles.textStyle}> {props.name} </Text>
      </View>
    </View>
  );
}
