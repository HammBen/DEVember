import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function DaysDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 4: Animation" }} />

      <Text>Days Details Screen 4</Text>
      <Link href={`/day4/splash`} asChild>
        <Button title="Go to Animation" />
      </Link>
    </View>
  );
}
