import React, { useState } from "react";
import { View, Text, TextInput, Feather } from "react-native";
import Item from "../Item/Item";

export default function Items() {
  const data = ["potato", "milk", "potato", "item4"];
  const [items, setItems] = useState();

  // const searchedData = data.filter();
  const searchedItem = data.includes();

  return (
    <View>
      <TextInput>Search: </TextInput>
      <TextInput
        // style={styles.input}
        placeholder="Search"
        // value={props.searchPhrase}
        // onChangeText={props.setSearchPhrase}
        // onFocus={() => {
        //   props.setClicked(true);
        // }}
      />
      {data.map((item) => (
        <Item item={item}></Item>
      ))}
    </View>
  );
}
