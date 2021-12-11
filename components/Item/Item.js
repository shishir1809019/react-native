import React from "react";
import { View, Text } from "react-native";

export default function Item({ item }) {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
}
