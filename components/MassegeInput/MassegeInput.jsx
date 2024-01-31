import { View, Text ,StyleSheet,TextInput,Pressable} from 'react-native'
import React ,{useState} from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MassegeInput = () => {
    const [message,setMessage]=useState("");
    const sendMessage= ()=>{
        console.log("send massege");
    }
    const onPlusPress=()=>{
        console.log("onPlusPress");
    }
    const onPress=()=>{
      if(message){
        sendMessage();
      }else{
        onPlusPress();
      }
    }
  return (
    <View style={styles.root}>
    <View style={styles.inputContainer}>
    <Feather name="smile" size={40} color="grey" style={styles.iconSmile} />
        <TextInput style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder='Single Message ...'/>
        <Feather name="camera" size={24} color="grey" />
        <MaterialCommunityIcons name="microphone-outline" size={24} color="grey" />
    </View> 
        <View style={styles.buttonContainer}>

       <Pressable onPress={onPress} style={styles.buttonText}>{message?<Ionicons name="send" size={24} color="black" />:<Feather name="plus" size={24} color="white" />}
</Pressable>
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
root:{
    flexDirection:"row",
    padding:10,
},
input:{
    flex:1,
    marginHorizontal:5,
},
inputContainer:{
    backgroundColor:"#f2f2f2",
    flex:1,
    marginRight:10,
    borderRadius:25,
    borderWidth:1,
    borderColor:"lightgrey",
    alignItems:"center",
    flexDirection:"row",

},
iconSmile:{
marginTop:10
,
marginHorizontal:5,
},
buttonContainer:{
    width:50,
    height:50,
    backgroundColor:"#3777f0",
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
},
buttonText:{
    color:"white",
    fontSize:35,
   
}
});

export default MassegeInput
