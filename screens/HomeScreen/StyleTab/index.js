import React,{useState,useEffect} from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import StyleItem from "../../../components/StyleItem";
import StyleNewItem from "../../../components/StyleNewItem";
import { styles } from "./style";
import SearchBar from "../../../components/SearchBar";

const Item = ({ item }) => (
  <StyleItem
    image={item.images}
    name={item.name}
  />
);

export default function StyleTab() {

   const [myArr, setMyArr] = useState([]);

   const data = myArr.length !== 0 ? [...myArr] : [];
   if (data.length !== 0) {
     console.log("data:", data[0].name);
   }
   console.log("data:", data);

   useEffect(() => {
     fetch("https://admin.furniture.bandn.online/mobile/style")
       .then((res) => res.json())
       .then((res) => setMyArr(res.data))
       .catch((err) => console.log(err));
   }, []);

   console.log("myArr:", myArr);

  const renderItem = ({ item }) => <Item item={item} />;
 
  return (
    <View style={styles.container}>
      <SearchBar />

      <Text style={styles.textNewStyle}>New Style</Text>

      <View style={styles.containerHorzontalScroll}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.horizontalScroll}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        >
          {data.length !== 0 && (
            <>
              <StyleNewItem name={data[0].name} image={data[0].images} />
              <StyleNewItem name={data[0].name} image={data[0].images} />
              <StyleNewItem name={data[0].name} image={data[0].images} />
              <StyleNewItem name={data[0].name} image={data[0].images} />
            </>
          )}
        </ScrollView>
      </View>

      <Text style={styles.textInteriorStyle}>Interior Design Styles</Text>
      {data.length !== 0 && (
        <FlatList
          // onScrollBeginDrag={() => setHidden(true)}
          // onScrollEndDrag={() => setHidden(false)}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          // style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}
