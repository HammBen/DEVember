import { View, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { Stack } from "expo-router";

export default function animation() {
  const animation = useRef(null);

  return (
    <View style={$container}>
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "80%",
          height: 350,
        }}
        source={require("../../../assets/netflix.json")}
      />
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000",
}
