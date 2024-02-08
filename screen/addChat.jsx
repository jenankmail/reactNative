import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { db } from '../Firebase/firebase-config ';
import { doc, setDoc } from "firebase/firestore"; 


const addChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  const createChat = async () => {
    await setDoc(doc(db, "chats", `${input}+12345`), {
      chatName: input,
      imageUrl:"https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      lastMessage:"message",
      time:"11:00 am"
    });
    setInput("");
    navigation.navigater("Home");
  };
  
  

  

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.text}>Add a new Chat</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter chat name'
            value={input}
            onChangeText={(text) => setInput(text)}
          />
        </View>
        <Button title='Add new chat' onPress={createChat} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  inputContainer: {
    padding: 20
  }
});

export default addChat;
