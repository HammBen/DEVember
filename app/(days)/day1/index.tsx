import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function DaysDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{fontFamily: "AmaticSC_400Regular", fontSize: 100}}>Days Details Screen</Text>
    </View>
  );
}
