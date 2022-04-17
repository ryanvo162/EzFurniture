import {
  View,
  ImageBackground,
  ActivityIndicator,
  Pressable,
  Text,
  Animated,
} from "react-native";
import * as Icon from "react-native-feather";
import React, { useState, useEffect, useRef } from "react";

import { styles } from "./style";
import IntroView from "../../components/IntroView";

import PagerView from "react-native-pager-view";

export default function WelcomeScreen(props) {
  const { navigation } = props;
  const handleGoToNext = () => {
    navigation.replace("LoginScreen");
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          delay: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 500,
          delay: 200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View style={styles.container} key="1">
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../assets/img/welcome_bg1.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {isLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            )}
            <IntroView />
            <Pressable onPress={handleGoToNext} style={styles.buttonNext}>
              <Animated.Text
                style={[
                  styles.textButtonNext,
                  {
                    opacity: fadeAnim,
                  },
                ]}
              >
                Swipe
              </Animated.Text>
              <Animated.View
                style={[
                  styles.swipe,
                  {
                    opacity: fadeAnim,
                  },
                ]}
              />
            </Pressable>
          </ImageBackground>
        </View>

        <View style={styles.container} key="2">
          <ImageBackground
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={require("../../assets/img/welcome_bg2.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {isLoading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            )}
            <Pressable onPress={handleGoToNext} style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
              <Icon.ChevronRight color="white" />
            </Pressable>
          </ImageBackground>
        </View>
      </PagerView>
    </View>
  );
}
