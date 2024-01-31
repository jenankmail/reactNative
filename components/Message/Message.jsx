import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const myId='u1';
const Message = ({massege}) => {
  const isMe = massege.user.id === myId;
  return (
    <View style={[styles.container,
    {backgroundColor: isMe ?"lightgrey":"#3777f0"
    , marginLeft:isMe?"auto":10,marginRight:isMe?10:"auto"}]}>
      <Text style={{Color: isMe?"black":"white"}} >{massege.content}</Text>
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