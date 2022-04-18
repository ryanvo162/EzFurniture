import React from "react";
import { View, TextInput, Pressable } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import { body } from "../../global/fonts";

export default function SearchBar(props) {
  const { onChangeText, onSearch } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchbar}
        placeholder="Search"
        placeholderTextColor={"white"}
        cursorColor="white"
        selectionColor={"white"}
        onChangeText={onChangeText}
      />
      <Pressable onPress={onSearch} style={styles.iconSearch}>
        <Icon.Search color={"white"} width={20} height={20}/>
      </Pressable>
    </View>
  );
}
