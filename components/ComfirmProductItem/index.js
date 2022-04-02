import React, { useState } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";

export default function ComfirmProductItem(props) {

    const { title, image, description, quantity, onPress, onDelete } = props;
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Pressable onPress={onPress} style={styles.items}>
            
            <View style={styles.imageView}>
                <Image
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                    source={image}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.productName}>{title}</Text>

                    <View style={styles.total}>
                        <Text style={styles.price}>{description}</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                    </View>
                </View>

            </View>

        </Pressable>
    );
}
