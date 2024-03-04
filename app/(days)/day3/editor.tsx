import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function editor() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />

      <Text>editor</Text>
    </View>
  );
}
