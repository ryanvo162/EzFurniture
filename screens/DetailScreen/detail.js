import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Image, Pressable, Text, ScrollView } from "react-native";

import { styles } from "./style";
import { styles as mainStyle } from "../../screens/styles";

import * as Icon from "react-native-feather";
import { Snackbar } from "react-native-paper";

export default function DetailScreen(props) {
  const { navigation } = props;

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleBuyNow = () => {
    onToggleSnackBar();
  };
  const handleAddCart = () => {
    onToggleSnackBar();
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require("../../assets/img/bg_home1.png")}
        style={styles.imageContainer}
      />
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContain}
      >
        <View style={styles.modalContainer}>
          <View style={styles.crossBar}></View>
          <View style={styles.quantity}>
            <Pressable style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </Pressable>
            <Text style={styles.quantityNumber}>1 </Text>
            <Pressable style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </Pressable>
          </View>
          <Text style={styles.title}>Product Name</Text>
          <Text style={styles.price}>$123.456</Text>
          <Text style={styles.descriptionTilte}>Description</Text>
          <Text style={styles.description}>
            Vulputate tortor pellentesque erat felis lectus sit. Sed
            pellentesque turpis non, fermentum, morbi ultrices felis massa.
            Sodales id ut viverra tempus risus tortor accumsan. Morbi quis id
            purus, scelerisque massa blandit consequat, nisl, quam.
          </Text>
          <Text style={styles.description}>
            Vulputate tortor pellentesque erat felis lectus sit. Sed
            pellentesque turpis non, fermentum, morbi ultrices felis massa.
            Sodales id ut viverra tempus risus tortor accumsan. Morbi quis id
            purus, scelerisque massa blandit consequat, nisl, quam.
          </Text>
          <Text style={styles.descriptionTilte}>Description</Text>
          <Text style={styles.description}>
            Vulputate tortor pellentesque erat felis lectus sit. Sed
            pellentesque turpis non, fermentum, morbi ultrices felis massa.
            Sodales id ut viverra tempus risus tortor accumsan. Morbi quis id
            purus, scelerisque massa blandit consequat, nisl, quam.
          </Text>
          <Text style={styles.description}>
            Vulputate tortor pellentesque erat felis lectus sit. Sed
            pellentesque turpis non, fermentum, morbi ultrices felis massa.
            Sodales id ut viverra tempus risus tortor accumsan. Morbi quis id
            purus, scelerisque massa blandit consequat, nisl, quam.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomButtons}>
        <Pressable onPress={handleAddCart} style={styles.buttonCart}>
          <Icon.ShoppingCart stroke="white" />
        </Pressable>

        <Pressable onPress={handleBuyNow} style={styles.buttonBuy}>
          <Icon.ShoppingBag stroke="white" />
          <Text style={styles.textButton}>Buy Now</Text>
        </Pressable>
      </View>

      <Snackbar
        visible={visible}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
        duration={2000}
        // action={{
        //   label: "Undo",
        //   onPress: () => {
        //     // Do something
        //   },
        // }}
      >
        Please add quantity you want.
      </Snackbar>
    </View>
  );
}
