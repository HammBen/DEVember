import { View, Text, ViewStyle, TextStyle, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { SlideInLeft } from "react-native-reanimated";

enum IconName {
  Eye = "eye",
  Snowflake = "snowflake-o",
  Barcode = "barcode",
  // Add more icon names as needed
}

const onboardingSteps = [
  {
    id: 1,
    icon: IconName.Eye,
    title: "Track every transaction",
    description:
      "Monitor your spending and contribution ensuring every penny aligns with your family's aspirations",
  },
  {
    id: 2,
    icon: IconName.Snowflake,
    title: "Education for children",
    description: "Learn by building 24 projects",
  },
  {
    id: 3,
    icon: IconName.Barcode,
    title: "Learn and grow together",
    description:
      "Contribute to the fundraiser 'Education for children' to help Save the children in the world",
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  return (
    <SafeAreaView style={$page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={$stepsIndicatorWrapper}>
        {onboardingSteps.map((step, index) => (
          <View
            style={[
              $stepsIndicator,
              { backgroundColor: index === screenIndex ? "#CEF202" : "grey" },
            ]}
            key={step.id}
          />
        ))}
      </View>
      <View style={$pageContent}>
        <FontAwesome
          name={data.icon}
          size={100}
          color="#CEF202"
          style={$image}
        />
        <View style={$footer}>
          <Animated.Text entering={SlideInLeft} style={$title}>{data.title}</Animated.Text>
          <Animated.Text entering={SlideInLeft} style={$description}>{data.description}</Animated.Text>
          <View style={$buttonWrapper}>
            <Text onPress={endOnboarding} style={$buttonText}>
              Skip
            </Text>
            <Pressable onPress={onContinue} style={$button}>
              <Text style={$buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const $page: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  backgroundColor: "#15141A",
  paddingVertical: 10,
};
const $pageContent: ViewStyle = {
  padding: 20,
  flex: 1,
};

const $stepsIndicatorWrapper: ViewStyle = {
  flexDirection: "row",
  marginTop: 7,
  columnGap: 8,
  paddingHorizontal: 16,
};

const $stepsIndicator: ViewStyle = {
  flex: 1,
  height: 2,
  backgroundColor: "gray",
  borderRadius: 10,
};

const $image: TextStyle = {
  alignSelf: "center",
  margin: 20,
  marginTop: 20,
};

const $title: TextStyle = {
  color: "#FDFDFD",
  fontSize: 50,
  fontWeight: "600",
  letterSpacing: 1.3,
  marginBottom: 10,
};
const $description: TextStyle = {
  color: "gray",
  fontSize: 18,
  lineHeight: 28,
};
const $footer: ViewStyle = {
  marginTop: "auto",
};

const $buttonWrapper: ViewStyle = {
  marginTop: 20,
  flexDirection: "row",
  alignItems: "center",
  columnGap: 20,
};

const $button: ViewStyle = {
  backgroundColor: "#302E38",
  alignItems: "center",
  borderRadius: 24,
  flex: 1,
};

const $buttonText: TextStyle = {
  color: "#FDFDFD",
  fontSize: 16,
  paddingVertical: 16,
  paddingHorizontal: 25,
};
