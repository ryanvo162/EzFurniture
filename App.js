import AppProvider from "./screens/main";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
// Fonts App
import AppLoading from "expo-app-loading";
import {
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { useFonts } from "expo-font";
import { Montserrat_400Regular,Montserrat_600SemiBold, Montserrat_400Regular_Italic } from "@expo-google-fonts/montserrat";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#DDAC8B",
    accent: "white",
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_400Regular_Italic,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <AppProvider />
    </PaperProvider>
  );
}
