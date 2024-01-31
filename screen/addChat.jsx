import { View, Text,StyleSheet,TextInput,Button } from 'react-native'
import { collection, addDoc } from "firebase/firestore"; import React, { useState } from 'react'
import { db,auth } from '../firebase';
const addChat = ({navigation}) => {
    const [input,setInput]=useState("");

    const CreatChat = async () => {
     try{
      const docRef = await addDoc(collection(db, "chats"), {
       chatName: input,
      
      });
      console.log("Document written with ID: ", docRef.id);
      setInput('');
     }catch(error){
alert(error.message);
throw error;
     }
    };
    const Create=async ()=>{
     await alert(auth.currentUser)
      }
  return (
    <View style={stylies.contianor}>
        <View style={{}}>
      <Text style={stylies.text} >add a new Chat</Text>
      <View style={stylies.inputContianer}>
         <TextInput placeholder='Enter chat name' value={input} onChangeText={(text)=>{
            setInput(text)
         }}/>
      </View>
      <Button title='add new chat' onPress={Create}/>
      </View>
    </View>
  )
}
const stylies=StyleSheet.create({
    contianor:{
flex:1,
justifyContent:"center",
alignItems:"center",
    },
    text:{
        color:"black",
        fontSize:20,
        fontWeight:"bold"
    },
    inputContianer:{
        padding:20
    }
})
export default addChat