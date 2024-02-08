import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView } from "react-native";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { useRoute } from "@react-navigation/native";
import MassegeInput from "../components/MassegeInput";
import Message from "../components/Message";
import { db } from "../Firebase/firebase-config ";
export default function ChatScreen() {
  const route = useRoute();
  const { id } = route.params;

  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    const chatMessagesRef = collection(db, "chats", id, "messages");
    const chatMessagesQuery = query(chatMessagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(chatMessagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setMessages(updatedMessages);
      scrollToBottom();
      console.log("Messages for chat", id, updatedMessages);
    });

    return () => unsubscribe();
  }, [id]);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.page}>
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() => scrollToBottom()}
      contentContainerStyle={styles.scrollViewContent}>
      {messages.map(({ id, data }) => (
        <Message
          key={id}
          id={id}
          message={data.message}
          email={data.senderEmail}
        />
      ))}
    </ScrollView>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputContainer}>
      <MassegeInput id={id} />
    </KeyboardAvoidingView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0,0,0,0.1)",
  },
});
