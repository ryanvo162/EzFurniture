import { View, ImageBackground, ActivityIndicator } from "react-native";
import React,{useState} from "react";

import { styles } from "./style";
import IntroView from "../../components/IntroView";

import PagerView from "react-native-pager-view";

export default function WelcomeScreen(props) {
  const { navigation } = props;
  const handleGoToNext = () => {
    navigation.replace("LoginScreen");
  }

  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0}>
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
          </ImageBackground>
        </View>
      </PagerView>
      <IntroView onPress={handleGoToNext} />
    </View>
  );
}
