import { View, Text ,StyleSheet,TextInput,Button} from 'react-native'
import React, { useState ,useLayoutEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import {auth} from '../firebase';
const registorScreen = ({navigation}) => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[imgUrl,setImgUrl]=useState("");
    const registerNew = () => {
      createUserWithEmailAndPassword(auth, email, password) // Use createUserWithEmailAndPassword correctly
          .then(authUser => {
              authUser.user.updateProfile({
                  displayName: name,
                  photoURL: imgUrl || "https://cdn1.iconfinder.com/data/icons/app-user-interface-flat/64/user_man_user_interface_app_person-512.png"
              })
                  .then(() => {
                      console.log("User profile updated successfully");
                  })
                  .catch((error) => {
                      console.error("Error updating user profile:", error);
                  });
          })
          .catch(error => alert(error.message));
  };
  return (
    <View style={stylies.continar}>
        <Text style={stylies.text}>
            Create a Signal account
        </Text>
        <View style={stylies.inputContianer}>
          <TextInput placeholder='Full Name' 
          value={name} onChangeText={(text)=>setName(text)} style={stylies.input}/>
       <TextInput placeholder='Email' 
          value={email} onChangeText={(text)=>setEmail(text)} style={stylies.input}/>
        
        <TextInput placeholder='Password' 
          secureTextEntry value={password} onChangeText={(text)=>setPassword(text)} style={stylies.input}/>
        <TextInput placeholder='Image URL' 
           value={imgUrl} onChangeText={(text)=>setImgUrl(text)} style={stylies.input}/>
        </View>
        <View style={{ marginTop:40 ,alignItems:"center",
}}>
        <Button title='Register' onPress={registerNew} />
        </View>
    </View>
  )
}
const stylies=StyleSheet.create({
 continar:{
 flex:1,
alignItems:"center",
paddingTop:50,

 },
text:{
    padding:20,
    color:"black",
    fontWeight:"bold",
    fontSize:22,
},
input:{
    width:250,
    height:40,
    padding:10,
    margin:5,
    borderWidth:0.2,
        borderColor:"#2C6BED",
},
inputContianer:{

}
})
export default registorScreen