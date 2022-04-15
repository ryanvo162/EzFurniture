import { StatusBar } from "expo-status-bar";
import React, { useEffect ,useState} from "react";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./style";

export default function SplashScreen(props) {
  // const [isLogin, setIsLogin] = useState();
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@is_login");
      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e) {
      console.error(e);
      // error reading value
    }
  };
  let isLogin;

  const { navigation } = props;

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(() =>
          getData().then((value) => {
            if (value == "true") {
              isLogin = true;
            } else {
              isLogin = false;
            }
          }),
          setTimeout(() => {
            navigation.replace(isLogin ? "HomeScreen" : "WelcomeScreen");
          }, 2000)
        );
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/img/logo.png")}
      />
      <StatusBar hidden />
    </View>
  );
}
