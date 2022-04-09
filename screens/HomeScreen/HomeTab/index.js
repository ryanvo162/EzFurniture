import React, { useState, useEffect } from "react";
import { View, ImageBackground, ActivityIndicator } from "react-native";
import { Snackbar } from "react-native-paper";
import * as Icon from "react-native-feather";
import { styles } from "./style";
import { styles as mainStyle } from "../../../screens/styles";

import PagerView from "react-native-pager-view";
import CategoryItem from "../../../components/CategoryItem";

export default function HomeTab(props) {
  const { navigation } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [myArr, setMyArr] = useState([]);

  const [status, setStatus] = useState(null);

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const DATA = myArr.length !== 0 ? [...myArr] : [];
  // if (DATA.length !== 0) {
  // console.log("DATA[0].name:", DATA[0].name);
  // }
  // console.log("DATA:", DATA);

  useEffect(async () => {
    await fetch("https://admin.furniture.bandn.online/mobile/category")
      .then((res) => res.json())
      .then((res) => {
        setStatus("Welcome to EzFurniture");
        setMyArr(res.data)
      })
      .catch((err) => {
        setStatus("Sorry, something went wrong with the server.");
        onToggleSnackBar();
        console.log(err);
      });
  }, []);

  // console.log("myArr:", myArr);

  const handleGoToProduct = (id) => {
    navigation.navigate("ProductScreen", {
      _id_category: id,
      title: "Category",
    });
  };

  return (
    <>
      <PagerView
        overScrollMode="never"
        style={styles.container}
        initialPage={0}
      >
        <View style={styles.container} key="1">
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home1.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {isLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            )}
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[0]._id}
                  category={DATA[0].name}
                  bottom={240}
                  right={50}
                  color="white"
                  onPress={handleGoToProduct}
                />

                <CategoryItem
                  id={DATA[1]._id}
                  category={DATA[1].name}
                  bottom={150}
                  left={102}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[2]._id}
                  category={DATA[2].name}
                  top={225}
                  right={100}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[3]._id}
                  category={DATA[3].name}
                  bottom={60}
                  right={27}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </View>
        <View style={styles.container} key="2">
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home2.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {isLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            )}
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[4]._id}
                  category={DATA[4].name}
                  top={100}
                  right={40}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[5]._id}
                  category={DATA[5].name}
                  bottom={130}
                  left={150}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </View>
        <View style={styles.container} key="3">
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home3.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {isLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            )}
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[6]._id}
                  category={DATA[6].name}
                  bottom={200}
                  right={60}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[7]._id}
                  category={DATA[7].name}
                  top={120}
                  left={50}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[8]._id}
                  category={DATA[8].name}
                  bottom={230}
                  left={30}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </View>
        <View style={styles.container} key="4">
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home4.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {isLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            )}
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[9]._id}
                  category={DATA[9].name}
                  bottom={170}
                  left={100}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[10]._id}
                  category={DATA[10].name}
                  bottom={100}
                  right={15}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[11]._id}
                  category={DATA[11].name}
                  bottom={380}
                  left={100}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </View>
        <View style={styles.container} key="5">
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home5.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {isLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            )}
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[12]._id}
                  category={DATA[12].name}
                  bottom={180}
                  right={50}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[13]._id}
                  category={DATA[13].name}
                  bottom={90}
                  left={60}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </View>
      </PagerView>
      <Snackbar
        visible={visible}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
        duration={1000}
        action={{
          label: "OK",
          onPress: () => {
            // Do something
          },
        }}
      >
        {status}
      </Snackbar>
    </>
  );
}
