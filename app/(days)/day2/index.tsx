import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function DaysDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2" }} />

      <Text>Days Details Screen 2</Text>
    </View>
  );
}
