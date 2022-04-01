import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Image, Pressable, Text, ScrollView } from "react-native";

import { styles } from "./style";
import { styles as mainStyle } from "../../screens/styles";

import * as Icon from "react-native-feather";
import { Snackbar } from "react-native-paper";
import QuantityButton from "../../components/QuantityButton";

export default function DetailScreen(props) {
  const { navigation } = props;

  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      console.log("Quantity can not be less than 0");
    }
  };

  const handlePlus = (count) => {
    setQuantity(count + 1);
  };

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleBuyNow = () => {
    onToggleSnackBar();
  };
  const handleAddCart = () => {
    onToggleSnackBar();
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="white" />
          <Text style={styles.headerLeftText}>Back</Text>
        </Pressable>
        <Pressable onPress={handleGoBack} style={styles.headerRight}>
          <Icon.Heart stroke="white" />
          {/* <Text style={styles.headerLeftText}>Back</Text> */}
        </Pressable>
      </View>
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
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Product Name</Text>
            <QuantityButton
              quantity={quantity}
              onPressPlus={handlePlus}
              onPressMinus={handleMinus}
            />
          </View>

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
