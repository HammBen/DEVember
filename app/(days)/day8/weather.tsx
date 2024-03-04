import { View, Text, Button, ViewStyle, TextStyle } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=5.5593&lon=0.1974&appid=a7f7d12f3aad04b8a4b6609e6b305864&units=metric
`;

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
}

export default function DaysDetailsScreen() {
  const [weather, setWeather] = useState<WeatherData>();
  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const results = await fetch(URL);
    const data = await results.json();
    console.log(JSON.stringify(data, null, 2));
    setWeather(data);
  };

  if (!weather) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={$container}>
      <Stack.Screen options={{ title: "Day 8: Weather" }} />

      <Text style={$location}>{weather.name}</Text>
      <Text style={$temperature}>{weather.main.temp}</Text>
      <Link href={`/day8/weather`} asChild>
        <Button title="Go to Weather" />
      </Link>
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
};

const $location: TextStyle = {
  fontSize: 24,
  fontFamily: "Inter_900Black",
};

const $temperature: TextStyle = {
  flex: 1,
  fontSize: 48,
  color: "gray",
};
