import React from "react";
import { StyleSheet } from "react-native";
import { styles } from "./style";
import { Searchbar } from "react-native-paper";
import { body } from "../../global/fonts";

export default function SearchBar(props) {
  const { onChangeText, name } = props;

  const onChangeSearch = () => {
    onChangeText(name);
  };

  return (
    <Searchbar
      style={styles.searchbar}
      iconColor="white"
      inputStyle={{
        color: "white",
        fontSize: body.fontSize,
        fontFamily: body.fontFamily,
      }}
      placeholder="Search"
      placeholderTextColor={"white"}
      cursorColor={"white"}
      selectionColor={"white"}
      onChangeText={onChangeSearch}
    />
  );
}
