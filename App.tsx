import { FlatList, TextStyle, View, ViewStyle } from "react-native";
import DayListItem from "./src/components/core/DayListItem";

export default function App() {
  const days = [...Array(24)].map((val, index) => index + 1);

  return (
    <View style={$container}>
      <FlatList
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        contentContainerStyle={$content}
        columnWrapperStyle={$column}
        numColumns={2}
      />
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
};

const $content: ViewStyle = {
  gap: 10,
  padding: 10,
};

const $column: ViewStyle = {
  gap: 10,
};

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
};
