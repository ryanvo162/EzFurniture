import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import NotificationItem from "../../../components/NotificationItem";

import { Snackbar } from "react-native-paper";

import * as Icon from "react-native-feather";
import { styles } from "./style";
import { styles as mainStyle } from "../../../screens/styles";

const data = [
  {
    id: "1",
    title: "Welcome to the EzFurniture",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Fhello.png?alt=media&token=3064cd84-8ec7-46ca-9665-9120b762df30",
    description: "Hi, I'm a notification you can ignore.",
    // date: "27/04/2022",
  },
  {
    id: "2",
    title: "New Update",
    description: "Easily manage your furniture!",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Fupgrade.png?alt=media&token=727cd199-25e8-4a7f-900b-a6bff9bb3aee",
  },
  {
    id: "3",
    title: "Next Genaration",
    description: "Shhh, just wait! That's all we know about that new version.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Fdiaphragm.png?alt=media&token=24cdd07f-43e0-4635-92bf-9cd2cd9d8601",
  },
  {
    id: "4",
    title: "About Us",
    description:
      "4T is a team of designers and developers who create high quality mobile apps. We are passionate about building products that connect the world.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Flogo4T.png?alt=media&token=c25078b4-1fa4-4f2d-a4f3-b2cdecd2721c",
  },
  {
    id: "5",
    title: "Feedback",
    description:
      "We are always looking for feedback. Please send us your feedback.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Ffeedback.png?alt=media&token=e5b3fa1c-2116-4ad8-86ec-207bf56cc384",
  },
  {
    id: "6",
    title: "Contact Us",
    description:
      "If you have any questions or collaboration, please contact us.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Fcontact-mail.png?alt=media&token=7c93d861-7d21-4872-8cd3-86e9185f36b5",
  },
];

export default function NotificationTab() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleGoToDetail = () => {
    console.log("Go to detail");
  };

  const handleDelete = () => {
    setStatus("Delete successfully");
    onToggleSnackBar();
    data.splice(0, 1);
  };

  const handleReadAll = () => {
    setStatus("Read all successfully");
    onToggleSnackBar();
    data.splice(0, data.length);
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <NotificationItem
      title={item.title}
      image={item.image}
      description={item.description}
      date={item.date}
      onPress={handleGoToDetail}
      onDelete={handleDelete}
    />
  );

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 95,
          }}
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.empty}>
          <Image
            style={styles.emptyImage}
            source={require("../../../assets/img/emptyNotification.png")}
          />
          <Text style={styles.emptyText}>
            We will send you notifications here.
          </Text>
        </View>
      )}
      <Snackbar
        visible={visible}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
      >
        {status}
      </Snackbar>
      <View style={styles.header}>
        <Pressable onPress={handleReadAll} style={styles.headerLeft}>
          <Icon.CheckCircle stroke="black" />
          <Text style={styles.headerReadingText}>Reading</Text>
        </Pressable>
        <Pressable style={styles.headerRight}>
          <Icon.Settings stroke="black" />
        </Pressable>
      </View>
    </View>
  );
}
