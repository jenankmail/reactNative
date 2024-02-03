import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { collection, addDoc } from '../firebase'; // Import collection and addDoc
import db from '../firebase'; // Import the db object directly

const addChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  const createChat = async () => {
    try {
      const docRef = await addDoc(db.collection("charts"), {
        chatName: input,
      });
      console.log("Document written with ID: ", docRef.id);
      setInput('');
      Alert.alert('Success', 'Chat added successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
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
