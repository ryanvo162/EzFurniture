import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    Pressable,
    Modal,
    Alert,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import DeliveryAddress from "../../components/DeliveryAddress";
import { blackColor, whiteColor, primaryColor } from "../../global/colors";
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
                <Pressable onPress={handleGoBack} style={styles.headerLeft} >
                    <Icon.ChevronLeft stroke="black" />
                    <Text style={styles.headerLeftText}>Delivery Address</Text>
                </Pressable>
            </View>

            <DeliveryAddress onPress={handleDeliveryAddress} />

            <Pressable style={styles.newDeliveryContainer} >
                <View style={styles.btnNewDelivery}>
                    <Text style={styles.textNewDelivery}> New delivery address</Text>
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
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.containerKeyboard} >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View style={styles.textContainer}>
                                        <TextInput style={styles.enterYourAddress} />
                                    </View>
                                    <ButtonApp text={'Save'} onPress={handleCheck} color={whiteColor} textColor={primaryColor} />
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </Modal>

        </View>


    );
}
