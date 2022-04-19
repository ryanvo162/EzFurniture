import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ImageBackground,
  ActivityIndicator,
  Animated,
  Easing,
  Pressable,
  Text,
} from "react-native";
import { Snackbar } from "react-native-paper";
import * as Icon from "react-native-feather";
import { styles } from "./style";
import { styles as mainStyle } from "../../../screens/styles";

import PagerView from "react-native-pager-view";
import CategoryItem from "../../../components/CategoryItem";
import { blackColor, primaryColor, whiteColor } from "../../../global/colors";
import { capslock } from "../../../global/format";

export default function HomeTab(props) {
  const { navigation } = props;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);

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
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 500,
            delay: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim1, {
            toValue: 0.3,
            duration: 500,
            easing: Easing.linear,
            delay: 200,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [fadeAnim, isLoading]);

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
        setMyArr(res.data);
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
        {/* Page 1 */}
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
            },
          ]}
          key="1"
        >
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home1.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <Pressable style={styles.buttonNext}>
              <Animated.View
                style={[
                  styles.buttonNextIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ArrowRightCircle
                  color={whiteColor}
                  width={40}
                  height={40}
                />
              </Animated.View>
            </Pressable>
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[0]._id}
                  category={capslock(DATA[0].name)}
                  // sofa
                  bottom={260}
                  right={65}
                  color="white"
                  onPress={handleGoToProduct}
                />

                <CategoryItem
                  id={DATA[1]._id}
                  category={capslock(DATA[1].name)}
                  bottom={140}
                  left={60}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[2]._id}
                  category={capslock(DATA[2].name)}
                  top={200}
                  right={100}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[3]._id}
                  category={capslock(DATA[3].name)}
                  bottom={90}
                  right={27}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </Animated.View>
        {/* Page 1 end */}
        {/* Page 2 */}
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
            },
          ]}
          key="2"
        >
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home2.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <Pressable style={styles.buttonBack}>
              <Animated.View
                style={[
                  styles.buttonBackIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ChevronLeft color={whiteColor} width={40} height={40} />
              </Animated.View>
            </Pressable>
            <Pressable style={styles.buttonNext}>
              <Animated.View
                style={[
                  styles.buttonNextIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ChevronRight color={whiteColor} width={40} height={40} />
              </Animated.View>
            </Pressable>
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[4]._id}
                  category={capslock(DATA[4].name)}
                  top={150}
                  right={95}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[5]._id}
                  category={capslock(DATA[5].name)}
                  bottom={145}
                  left={120}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </Animated.View>
        {/* Page 2 end */}
        {/* Page 3 */}
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
            },
          ]}
          key="3"
        >
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home3.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <Pressable style={styles.buttonBack}>
              <Animated.View
                style={[
                  styles.buttonBackIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ChevronLeft color={blackColor} width={40} height={40} />
              </Animated.View>
            </Pressable>
            <Pressable style={styles.buttonNext}>
              <Animated.View
                style={[
                  styles.buttonNextIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ChevronRight color={blackColor} width={40} height={40} />
              </Animated.View>
            </Pressable>
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[6]._id}
                  category={capslock(DATA[6].name)}
                  bottom={200}
                  right={60}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[7]._id}
                  category={capslock(DATA[7].name)}
                  top={275}
                  left={100}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[8]._id}
                  category={capslock(DATA[8].name)}
                  bottom={245}
                  left={50}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </Animated.View>
        {/* Page 3 end */}
        {/* Page 4 */}
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
            },
          ]}
          key="4"
        >
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home4.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <Pressable style={styles.buttonBack}>
              <Animated.View
                style={[
                  styles.buttonBackIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ChevronLeft color={whiteColor} width={40} height={40} />
              </Animated.View>
            </Pressable>
            <Pressable style={styles.buttonNext}>
              <Animated.View
                style={[
                  styles.buttonNextIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ChevronRight color={whiteColor} width={40} height={40} />
              </Animated.View>
            </Pressable>
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[9]._id}
                  category={capslock(DATA[9].name)}
                  bottom={190}
                  left={60}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[10]._id}
                  category={capslock(DATA[10].name)}
                  bottom={130}
                  right={30}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[11]._id}
                  category={capslock(DATA[11].name)}
                  top={300}
                  left={100}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </Animated.View>
        {/* Page 4 end */}
        {/* Page 5 */}
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
            },
          ]}
          key="5"
        >
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../../assets/img/bg_home5.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <Pressable style={styles.buttonBack}>
              <Animated.View
                style={[
                  styles.buttonBackIcon,
                  {
                    opacity: fadeAnim1,
                  },
                ]}
              >
                <Icon.ArrowLeftCircle
                  color={whiteColor}
                  width={40}
                  height={40}
                />
              </Animated.View>
            </Pressable>
            {DATA.length !== 0 && (
              <>
                <CategoryItem
                  id={DATA[12]._id}
                  category={capslock(DATA[12].name)}
                  bottom={260}
                  right={50}
                  color="white"
                  onPress={handleGoToProduct}
                />
                <CategoryItem
                  id={DATA[13]._id}
                  category={capslock(DATA[13].name)}
                  bottom={100}
                  left={60}
                  color="white"
                  onPress={handleGoToProduct}
                />
              </>
            )}
          </ImageBackground>
        </Animated.View>
        {/* Page 5 end */}
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
