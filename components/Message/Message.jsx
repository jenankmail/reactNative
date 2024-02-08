import { View, Text ,StyleSheet, ScrollView,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { auth } from '../../Firebase/firebase-config ';
const myId='u1';
const Message = ({ id , message , email , enterChat}) => {
  const isMe = auth.currentUser.email;
  return (
   
  <View behavior="height" key={id} style={[styles.container,
    {backgroundColor: isMe === email?"#3777f0":"lightgrey"
    , marginLeft:isMe === email?10:"auto",marginRight:isMe === email?"auto":10}]}>
      <Text style={{Color: isMe?"black":"white"}} >{message}</Text>
    </View>
   
  )
}
const styles=StyleSheet.create({
container:{
    backgroundColor:"#3777f0",
    padding:10,
    margin:10,
    borderRadius:10,
    maxWidth:"75%",
}

});
export default Message