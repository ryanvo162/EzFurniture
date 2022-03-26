import React from "react";
import { StyleSheet } from "react-native";
import { styles } from "./style";
import { Searchbar } from 'react-native-paper';
import { title2, body, bold, body2, bold12 } from "../../global/fonts";

export default function SearchBar(props) {
  const { hidden } = props;
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const stylesInner = StyleSheet.create({
    searchbar: {

      display: hidden ? "none" : "flex",
    },
  });

  return (

    <Searchbar
      style={[styles.searchbar, stylesInner.searchbar]}
      iconColor="white"
      inputStyle={{ color: 'white', fontSize: body.fontSize, fontFamily: body.fontFamily }}
      placeholder="Search" placeholderTextColor={'white'}
      cursorColor={'white'}
      selectionColor={'white'}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

  );
}


