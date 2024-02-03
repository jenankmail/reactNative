import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import { useRoute, useNavigation } from "@react-navigation/native";
import MassegeInput from "../components/MassegeInput";
import ChatTitle from "../components/Title/chatTitle";
export default function chatScreen() {
  const route = useRoute();
  const { user } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        inverted
        renderItem={({ item }) => <Message massege={item} />}
      />
      <MassegeInput />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});