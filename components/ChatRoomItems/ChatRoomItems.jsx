import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function ChatRoomItems({ id , chatName , enterChat,imageChat,time,lastMessage}) {
  const Navigation = useNavigation();
  const onPress = () => {
   Navigation.navigate("chatScreen", { chatName:chatName , id:id ,imageChat:imageChat});
  };
  return (
    <Pressable onPress={onPress} style={styles.container} key={id}>
      <Image source={{ uri: imageChat }} style={styles.img2} />

      <View style={styles.rightContianer}>
        <View style={styles.row}>
          <Text style={styles.name}>{chatName}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {" "}
            {lastMessage}   
        </Text>
      </View>
    </Pressable>
  );
}

