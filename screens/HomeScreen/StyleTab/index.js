import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import StyleItem from "../../../components/StyleItem";
import StyleNewItem from "../../../components/StyleNewItem";
import { styles } from "./style";
import SearchBar from "../../../components/SearchBar";

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../../../screens/styles";
import LoadingCardNewStyle from "../../../components/LoadingCardNewStyle";
import LoadingStyle from "../../../components/LoadingStyle";

export default function StyleTab(props) {
  const { navigation, route } = props;

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);

  const [myArrSearch, setMyArrSearch] = useState([]);
  const dataSearch = myArrSearch.length !== 0 ? [...myArrSearch] : [];

  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (search.length !== 0) {
      await fetch("https://admin.furniture.bandn.online/mobile/style")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          //search
          const newArr = res.data.filter((item) => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          });
          setMyArrSearch(newArr);
        })
        .catch((err) => {
          setStatus("Check server");
          onToggleSnackBar();
          console.log(err);
        });
    }
  };

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const Item = ({ item }) => (
    <StyleItem
      id={item._id}
      image={item.images}
      name={item.name}
      onPress={handleGoToProduct}
    />
  );

  const [myArr, setMyArr] = useState([]);
  const data = myArr.length !== 0 ? [...myArr] : [];

  useEffect(() => {
    fetch("https://admin.furniture.bandn.online/mobile/style")
      .then((res) => res.json())
      .then((res) => setMyArr(res.data))
      .catch((err) => {
        setStatus("Check server");
        onToggleSnackBar();
        console.log(err);
      });
  }, []);

  // console.log("myArr:", myArr);
  const handleGoToProduct = (id) => {
    navigation.navigate("ProductScreen", { _id_style: id, title: "Style" });
  };

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {data.length !== 0 || dataSearch.length !== 0 ? (
            search === "" ? (
              <FlatList
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: 100,
                  paddingTop: 100,
                }}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                ListHeaderComponent={
                  <>
                    <Text style={styles.textNewStyle}>New Style</Text>
                    <View style={styles.containerHorzontalScroll}>
                      <ScrollView
                        horizontal={true}
                        contentContainerStyle={styles.horizontalScroll}
                        overScrollMode="never"
                        showsHorizontalScrollIndicator={false}
                      >
                        {(data.length !== 0 && (
                          <>
                            <StyleNewItem
                              id={data[7]._id}
                              onPress={handleGoToProduct}
                              name={data[7].name}
                              image={data[7].images}
                            />
                            <StyleNewItem
                              id={data[5]._id}
                              onPress={handleGoToProduct}
                              name={data[5].name}
                              image={data[5].images}
                            />
                            <StyleNewItem
                              id={data[4]._id}
                              onPress={handleGoToProduct}
                              name={data[4].name}
                              image={data[4].images}
                            />
                          </>
                        )) || (
                          <>
                            <LoadingCardNewStyle />
                            <LoadingCardNewStyle />
                            <LoadingCardNewStyle />
                            <LoadingCardNewStyle />
                          </>
                        )}
                      </ScrollView>
                    </View>
                    <Text style={styles.textInteriorStyle}>
                      Interior Design Styles
                    </Text>
                  </>
                }
              />
            ) : (
              <FlatList
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: 100,
                  paddingTop: 100,
                }}
                data={dataSearch}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                ListHeaderComponent={
                  <>
                    <Text style={styles.textNewStyle}>Search Results</Text>
                  </>
                }
              />
            )
          ) : (
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 100,
                paddingTop: 130,
              }}
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
            >
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.horizontalScroll}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}
              >
                <LoadingCardNewStyle />
                <LoadingCardNewStyle />
                <LoadingCardNewStyle />
                <LoadingCardNewStyle />
              </ScrollView>
              <LoadingStyle />
              <LoadingStyle />
              <LoadingStyle />
              <LoadingStyle />
            </ScrollView>
          )}

          <View style={styles.header}>
            <SearchBar onChangeText={setSearch} onSearch={handleSearch} />
          </View>

          <Snackbar
            visible={visible}
            style={[mainStyle.snackbar, styles.snackbar]}
            onDismiss={onDismissSnackBar}
            duration={1000}
            action={{
              label: "OK",
              onPress: () => {
                // Do something
              },
            }}
          >
            {status}
          </Snackbar>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
