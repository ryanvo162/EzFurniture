import React, { useState, useEffect } from "react";
import { View, ImageBackground, ActivityIndicator } from "react-native";
import { styles } from "./style";

import PagerView from "react-native-pager-view";
import CategoryItem from "../../../components/CategoryItem";

export default function HomeTab(props) {
  const { navigation } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [myArr, setMyArr] = useState();

  useEffect(async () => {
    const data = await fetch(
      "https://admin.furniture.bandn.online/mobile/category"
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setMyArr(data);
    console.log(myArr);
  }, []);

  const handleGoToProduct = (category) => {
    // console.log(category);
    navigation.navigate("ProductScreen", {
      data: myArr,
    });
  };

  return (
    <PagerView overScrollMode="never" style={styles.container} initialPage={0}>
      <View style={styles.container} key="1">
        <ImageBackground
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/bg_home1.png?alt=media&token=128a49e0-ae7e-4474-987a-dfe259b0e4fd",
          }}
          resizeMode="cover"
          style={styles.image}
        >
          {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}
          <CategoryItem
            category="Sofa"
            bottom={240}
            right={50}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Picture"
            top={225}
            right={100}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Coffee Table"
            bottom={150}
            left={102}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Carpet"
            bottom={60}
            right={27}
            color="white"
            onPress={handleGoToProduct}
          />
        </ImageBackground>
      </View>

      <View style={styles.container} key="2">
        <ImageBackground
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/bg_home2.png?alt=media&token=e83df5d2-d22e-4b9e-95e9-2c0167462236",
          }}
          resizeMode="cover"
          style={styles.image}
        >
          {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}
          <CategoryItem
            category="Lamp"
            top={100}
            right={40}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Cabinet"
            bottom={130}
            left={150}
            color="white"
            onPress={handleGoToProduct}
          />
        </ImageBackground>
      </View>

      <View style={styles.container} key="3">
        <ImageBackground
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/bg_home3.png?alt=media&token=7f39dc6b-8c6b-4546-a91e-9b2860fb9ddb",
          }}
          resizeMode="cover"
          style={styles.image}
        >
          {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}
          <CategoryItem
            category="Bed"
            bottom={200}
            right={60}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Picture"
            top={180}
            right={30}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Hanging Light"
            top={120}
            left={50}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Bedside Table"
            bottom={230}
            left={30}
            color="white"
            onPress={handleGoToProduct}
          />
        </ImageBackground>
      </View>

      <View style={styles.container} key="4">
        <ImageBackground
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/bg_home4.png?alt=media&token=9e7e5fc8-c6b4-44d9-af91-b847d07a3077",
          }}
          resizeMode="cover"
          style={styles.image}
        >
          {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}

          <CategoryItem
            category="Desk"
            bottom={170}
            left={100}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Chair"
            bottom={100}
            right={15}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Reading Lamp"
            bottom={380}
            left={100}
            color="white"
            onPress={handleGoToProduct}
          />
        </ImageBackground>
      </View>

      <View style={styles.container} key="5">
        <ImageBackground
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/bg_home5.png?alt=media&token=e14607ff-c771-4641-bf42-a6e436f28925",
          }}
          resizeMode="cover"
          style={styles.image}
        >
          {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}
          <CategoryItem
            category="Dining Chairs"
            bottom={180}
            right={50}
            color="white"
            onPress={handleGoToProduct}
          />
          <CategoryItem
            category="Dinner Table"
            bottom={90}
            left={60}
            color="white"
            onPress={handleGoToProduct}
          />
        </ImageBackground>
      </View>
    </PagerView>
  );
}
