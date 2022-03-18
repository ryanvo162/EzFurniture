import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 80,
          paddingBottom: 100,
        }}
      >
        {/* headerView */}
        <View style={styles.profileUser}>
          <Image style={styles.imageUser}></Image>

          <View style={styles.profileInfoUser}>
            <Text style={styles.nameUser}>Kristin Watson</Text>
            <Text style={styles.gmailUser}>kristin@gmail.com</Text>
          </View>
        </View>
        {/* Functions list */}
        <View style={styles.functionsList}>
          <View style={styles.items}>
            <Icon.Package
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>My Order</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.items}>
            <Icon.CreditCard
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>Payment method</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.items}>
            <Icon.MapPin
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>Delivery address</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.items}>
            <Icon.Gift stroke="#fff" strokeWidth={1.5} height={30} width={30} />
            <Text style={styles.itemsText}>Gift card &amp; vouchers</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.items}>
            <Icon.User stroke="#fff" strokeWidth={1.5} height={30} width={30} />
            <Text style={styles.itemsText}>Information</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.items}>
            <Icon.HelpCircle
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>Support</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </View>
          <View style={styles.hr}></View>

          <View style={styles.items}>
            <Icon.Mail stroke="#fff" strokeWidth={1.5} height={30} width={30} />
            <Text style={styles.itemsText}>Feedback</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </View>
          <View style={styles.hr}></View>
        </View>
      </ScrollView>
    </View>
  );
}
