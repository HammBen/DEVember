import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { Stack } from "expo-router";

export default function animation() {
  const animation = useRef(null);

  return (
    <View>
      {/* <Stack.Screen options={{ headerShown: false }} /> */}
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../../assets/netflix.json")}
      />
      <Text>animation</Text>
    </View>
  );
}
