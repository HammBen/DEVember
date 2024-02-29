import { Text, ViewStyle, TextStyle, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface DayListItemProp {
  day: number;
}

export default function DayListItem({ day }: DayListItemProp) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={$box}>
        <Text style={$text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

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
  fontFamily: "AmaticSC_700Bold",
};
