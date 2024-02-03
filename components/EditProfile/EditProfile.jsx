import { View, Text ,TextInput,StyleSheet, Button} from 'react-native'
import React, { useState } from 'react'

const EditProfile = ({navigation}) => {
    const [URL,setURL]=useState("");
    const editImage=()=>{
        if(URL){
            navigation.navigate("Home");

        }else{
alert("please enter URL") ;
       }
    }
  return (
    <View style={stylies.contianer}>
      <Text style={stylies.title}>EditProfile</Text>
      <View style={stylies.inputContianer}>
      <TextInput placeholder='Enter new URL Profile image3' value={URL} onChangeText={(item)=>setURL(item)}/>
      </View>
      <Button title='update image' onPress={editImage}/>
      
    </View>
  )
}
 
const stylies=StyleSheet.create({
    contianer:{
        flex:1,
        alignItems:"center",
        top:100,
        fontSize:25,
    },
    title:{
        fontWeight:"bold",
        color:"#2C6BED",
    },
    
    inputContianer:{
        margin:20,
        alignItems:"center",
        borderWidth:1,
        borderColor:"#2C6BED",
        width:250,
    }
})
export default EditProfile