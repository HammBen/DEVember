import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    AmaticSC_400Regular,
    AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Devember" }} />
    </Stack>
  );
}
