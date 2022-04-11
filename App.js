import AppProvider from "./screens/main";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
// Fonts App
import {
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";
import * as Sentry from "sentry-expo";
import {Provider} from "./provider";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#DDAC8B",
    accent: "white",
  },
};

Sentry.init({
  dsn: "https://dfe6ada9dff44ff38f4a545ccc15176b@o1196042.ingest.sentry.io/6319205",
  enableInExpoDevelopment: true,
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

// Access any @sentry/react-native exports via:
// Sentry.Native.*
// Access any @sentry/browser exports via:
// Sentry.Browser.*

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
    <Provider>
      <PaperProvider theme={theme}>
        <AppProvider />
      </PaperProvider>
    </Provider>
  );
}
