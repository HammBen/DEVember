import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function DaysDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 8: Weather" }} />

      <Text>Days Details Screen 8</Text>
      <Link href={`/day8/weather`} asChild>
        <Button title="Go to Weather" />
      </Link>
    </View>
  );
}
