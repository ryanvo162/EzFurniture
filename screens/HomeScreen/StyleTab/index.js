import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import StyleItem from "../../../components/StyleItem";
import { styles } from "./style";

export default function StyleTab() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingTop: 45,
          paddingBottom: 100,
        }}
      >
        <StyleItem
          source={require("../../../assets/img/bg_home1.png")}
          name="Style1"
        />
        <StyleItem
          source={require("../../../assets/img/bg_home1.png")}
          name="Style2"
        />
        <StyleItem
          source={require("../../../assets/img/bg_home1.png")}
          name="Style3"
        />
        <StyleItem
          source={require("../../../assets/img/bg_home1.png")}
          name="Style4"
        />
      </ScrollView>
    </View>
  );
}
