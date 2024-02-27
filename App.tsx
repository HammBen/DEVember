import { FlatList, TextStyle, View, ViewStyle } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import DayListItem from "./src/components/core/DayListItem";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const days = [...Array(24)].map((val, index) => index + 1);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
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
    <View style={$container}>
      <FlatList
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        contentContainerStyle={$content}
        columnWrapperStyle={$column}
        numColumns={2}
      />
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
};

const $content: ViewStyle = {
  gap: 10,
  padding: 10,
};

const $column: ViewStyle = {
  gap: 10,
};

const $box: ViewStyle = {
  backgroundColor: "#F9EDE3",
  flex: 1,
  aspectRatio: 1,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 0.5,
  borderColor: "#9B4521",
  borderRadius: 20,
};

const $text: TextStyle = {
  color: "#9B4521",
  fontSize: 50,
};
