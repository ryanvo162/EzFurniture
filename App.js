import AppProvider from "./screens/main";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#DDAC8B",
    accent: "white",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppProvider />
    </PaperProvider>
  );
}
