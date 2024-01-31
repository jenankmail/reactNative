import React from "react";
import { StyleSheet, Text, View ,FlatList ,SafeAreaView} from "react-native";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import { useRoute ,useNavigation } from "@react-navigation/native";
import MassegeInput from "../components/MassegeInput";
export default function chatScreen(){
    
    const route=useRoute();
    const navigation=useNavigation();
    navigation.setOptions({title:"lolo"})
    return(
        <SafeAreaView style={styles.page}>
            <FlatList data={chatRoomData.messages}
            inverted
            renderItem={({item})=> <Message  massege={item} />
        }/>
        <MassegeInput/>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
page:{
    flex:1,
    backgroundColor:"white"
}
});