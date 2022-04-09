import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    Pressable,
    Modal,
    ScrollView,
    Image,
    Alert
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import ButtonApp from "../../components/Button";
import { blackColor, whiteColor, primaryColor, gray1Color, gray2Color, gray3Color } from "../../global/colors";

export default function ChangePasswordScreen() {
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Pressable onPress={handleGoBack} style={styles.headerLeft}>
                    <Icon.ChevronLeft stroke={blackColor} />
                    <Text style={styles.headerLeftText}>Change Password</Text>
                </Pressable>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator="fasle">

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={gray3Color}
                        color={blackColor}
                        cursorColor={primaryColor}
                        selectionColor={primaryColor} />
                    <TextInput
                        style={styles.input}
                        placeholder="New Password"
                        placeholderTextColor={gray3Color}
                        color={blackColor}
                        cursorColor={primaryColor}
                        selectionColor={primaryColor} /> 
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm New Password"
                        placeholderTextColor={gray3Color}
                        color={blackColor}
                        cursorColor={primaryColor}
                        selectionColor={primaryColor} />
                </View>

                <View style={styles.buttonContainer}>
                    <ButtonApp text="Save" onPress={() => Alert.alert("Change password success")} />
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require("../../assets/img/change_password.png")}
                    />
                </View>

            </ScrollView>
        </View>


    );
}
