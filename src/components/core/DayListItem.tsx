import { View, Text, ViewStyle, TextStyle } from "react-native";
import React from "react";

interface DayListItemProp {
  day: number;
}

export default function DayListItem({ day }: DayListItemProp) {
  return (
    <View style={$box}>
      <Text style={$text}>{day}</Text>
    </View>
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
