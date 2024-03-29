import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function DaysDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />

      <Text>Days Details Screen 2</Text>
      <Link href={`/day2/onboarding`} asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
}
