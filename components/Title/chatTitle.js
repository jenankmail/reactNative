import { View, Text, Image, useWindowDimensions, Pressable ,Alert} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import styles from "../ChatRoomItems/styles";
const chatTitle = ({navigation}) => {
  const route = useRoute();
  const {chatName,imageChat} = route.params;
  const { width } = useWindowDimensions();
  const calling=()=>{
   alert("calling function");
  }
  const vedioCalling=()=>{
    alert("video Camera calling to user");
  }
  const deletChat=()=>{
    Alert.alert(
      'DELETE CHAT',
      'Are you sure you want to delete the chat??',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => navigation.navigate("Home") }
      ],
      { cancelable: false }
    );
  }
  const displayOtherPerson=()=>{
navigation.navigate("otherPerson", { chatName ,imageChat})  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 50,
        paddingLeft: 30,
        alignItems: "center",
        marginLeft: -20,
      }}
    >
      <Pressable onPress={displayOtherPerson} >
      <Image
        source={{ uri: imageChat }}
        style={{ width: 40, height: 40, borderRadius: 30 }}
      />
            </Pressable>

      <Text
        style={{
          flex: 1,
          fontWeight: "bold",
          textAlign: "left",
          marginLeft: 10,
        }}
      >
        {chatName}
      </Text>
      <Pressable onPress={vedioCalling}>
      <FontAwesome
        name="video-camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 5 }}
      />
            </Pressable>

      <Pressable onPress={calling}>
      <MaterialIcons
        name="call"
        size={24}
        color="black"
        style={{ marginHorizontal: 5 }}
      /></Pressable>
      <Pressable onPress={deletChat}>
      <Entypo
        name="dots-three-vertical"
        size={24}
        color="black"
        style={{ marginHorizontal: 5 }}
      />
       </Pressable>
    </View>
   
  );
};

export default chatTitle;