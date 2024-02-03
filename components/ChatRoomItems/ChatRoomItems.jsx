import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function ChatRoomItems({ chatRoom }) {
  const user = chatRoom.users[1];
  const Navigation = useNavigation();
  const onPress = () => {
    Navigation.navigate("chatScreen", { user: user });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.img2} />

      {chatRoom.newMessages ? (
        <View style={styles.badegContianer}>
          <Text style={styles.badegText}>{chatRoom.newMessages}</Text>
        </View>
      ) : null}
      <View style={styles.rightContianer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>11:11 am</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {" "}
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}

