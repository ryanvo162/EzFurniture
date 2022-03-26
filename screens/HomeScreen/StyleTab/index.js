import React from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import StyleItem from "../../../components/StyleItem";
import StyleNewItem from "../../../components/StyleNewItem";
import { styles } from "./style";
import SearchBar from "../../../components/SearchBar";

const DATA = [
  {
    id: "1",
    title: "First Item",
    image: require("../../../assets/img/bg_home1.png"),
  },
  {
    id: "2",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "3",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "4",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "5",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "6",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "7",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
];

const Item = ({ item }) => (
  <StyleItem
    image={item.image}
    name={item.title}
  />
);

export default function StyleTab() {
  const renderItem = ({ item }) => <Item item={item} />;
  const [hidden, setHidden] = React.useState(false);
  return (

    <View style={styles.container}>

      <SearchBar hidden={hidden}/>

      <Text style={styles.textNewStyle}>New Style</Text>

      <View style={styles.containerHorzontalScroll}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.horizontalScroll}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        >
          <StyleNewItem name={DATA[0].title} image={DATA[0].image} />
          <StyleNewItem name={DATA[1].title} image={DATA[1].image} />
          <StyleNewItem name={DATA[2].title} image={DATA[2].image} />
          <StyleNewItem name={DATA[3].title} image={DATA[3].image} />
        </ScrollView>
      </View>

      <Text style={styles.textInteriorStyle}>Interior Design Styles</Text>
      <FlatList
        // onScrollBeginDrag={() => setHidden(true)}
        // onScrollEndDrag={() => setHidden(false)}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
