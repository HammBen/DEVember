import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function DaysDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />

      <Text>Days Details Screen 3</Text>
      <Link href={`/day3/editor`} asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
}
