import { View, Text ,StyleSheet,TextInput,Button,KeyboardAvoidingView} from 'react-native'
import React, { useState ,useLayoutEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../Firebase/firebase-config ';
import {auth} from '../Firebase/firebase-config ';
const registorScreen = ({navigation}) => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[imgUrl,setImgUrl]=useState("");
    
const registerNew = async () => {
  try {
    const authUser = await createUserWithEmailAndPassword(auth, email, password);
    
    // Store user data in Firestore
    await setDoc(doc(db, "users", authUser.user.uid), {
      uid: authUser.user.uid,
      displayName: name,
      email: email,
      photoURL: imgUrl || 'https://pbs.twimg.com/profile_images/1042111463748513793/LczSTzT8_400x400.jpg'
   });
    
    console.log('User registered successfully.');
  } catch (error) {
    console.error('Error registering user:', error.message);
    // You can handle the error here (e.g., display an error message to the user)
  }
};
  return (
    <KeyboardAvoidingView behavior="height" style={stylies.continar} >
        <Text style={stylies.text}>
            Create a GCC account
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
        <View style={{height:80}}/>
    </KeyboardAvoidingView>
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
    fontSize:20,
},
input:{
    width:250,
    height:40,
    padding:10,
    margin:5,
    borderWidth:0.2,
        borderColor:"#D5B895",
},
inputContianer:{

}
})
export default registorScreen