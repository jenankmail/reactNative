import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView } from "react-native";
import ChatRoomItems from "../components/ChatRoomItems";
import { doc, onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase-config ";

export default function Home({ navigation }) {
    const [chats, setChats] = useState([]);

    enterChat = (id, chatName) => {
        navigation.navigate("chatScreen", {
            id,
            chatName
        })
    }

    useEffect(() => {
        const q = query(collection(db, "chats"), orderBy("time", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updatedChats = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
            setChats(updatedChats);
            console.log("chats", updatedChats);
        });

        return () => unsubscribe();
    }, []);

    return (
        <ScrollView>
            {chats.map(({ id, data }) => (
                <ChatRoomItems
                    key={id}
                    id={id}
                    chatName={data.chatName}
                    imageChat={data.imageChat}
                    time={data.time}
                    lastMessage={data.lastMessage}
                    enterChat={enterChat}
                />
            ))}
        </ScrollView>
    );
}
