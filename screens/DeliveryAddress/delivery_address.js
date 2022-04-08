import React, { useState } from "react";
import { View, Text, Pressable, Modal, Alert } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import DeliveryAddress from "../../components/DeliveryAddress";
import { blackColor } from "../../global/colors";
import ButtonApp from "../../components/Button";

export default function DeliveryAddressScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleDeliveryAddress = () => {
        setModalVisible(true)
    }
    const handleCheck = () => { setModalVisible(!modalVisible) }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Pressable onPress={handleGoBack} style={styles.headerLeft}>
                    <Icon.ChevronLeft stroke="black" />
                    <Text style={styles.headerLeftText}>Delivery Address</Text>
                </Pressable>
            </View>

            <DeliveryAddress />

            <Pressable style={styles.newDeliveryContainer}>
                <View style={styles.btnNewDelivery}>
                    <Text style={styles.textNewDelivery}>Delivery Address</Text>
                    <Icon.Plus stroke={blackColor} strokeWidth={1} />
                </View>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>

                    <View style={styles.textContainer}>
                        <Text style={styles.enterYourAddress}>Enter your address</Text>
                    </View>

                    <ButtonApp text={'Save'} onPress={handleCheck} color={whiteColor} textColor={primaryColor} />

                </View>    

            </Modal>


        </View>
    );
}
