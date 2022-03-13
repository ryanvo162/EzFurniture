import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./style";

import PagerView from "react-native-pager-view";

export default function HomeTab() {
  return (
    <PagerView style={styles.container} initialPage={0}>
      <View style={styles.container} key="1">
        <ImageBackground
          source={require("../../../assets/img/bg_home1.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>Home1</Text>
        </ImageBackground>
      </View>

      <View style={styles.container} key="2">
        <ImageBackground
          source={require("../../../assets/img/bg_home1.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>Home2</Text>
        </ImageBackground>
      </View>

      <View style={styles.container} key="3">
        <ImageBackground
          source={require("../../../assets/img/bg_home1.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>Home3</Text>
        </ImageBackground>
      </View>
    </PagerView>
  );
}
