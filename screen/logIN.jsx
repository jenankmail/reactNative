import { View, Text ,Image,StyleSheet,TextInput,Button,Pressable} from 'react-native'
import React from 'react'
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useState,useEffect } from 'react'
const logIN = ({navigation}) => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
useEffect(()=>{
const unsubscibe= auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    navigation.replace("Home");
  }
});

return unsubscibe;
},[]);
const signIn=()=>{
  signInWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log('User signed in:', user);
    navigation.replace('Home'); 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Sign in error:', errorMessage);
  });
}

  return (
    <View style={stylies.container}> 
    <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png'}} style={stylies.image}/>
    <View >
        <TextInput 
        placeholder='email' value={email} onChangeText={(text)=>setEmail(text)} style={stylies.inputContianer} />
        <TextInput 
        placeholder='password' secureTextEntry value={password} onSubmitEditing={signIn} onChangeText={(text)=>setPassword(text)} style={stylies.inputContianer}/>

    </View>
    <View style={{width:100}} >
     <Button title='Login' onPress={signIn} />
     <Pressable>
     <Text onPress={()=>navigation.navigate('registor')}style={stylies.registorButton}>
     Register
     </Text>
     </Pressable>
     </View>
     
    </View>
  )
}

const stylies=StyleSheet.create({

    container:{
    flex:1,
    alignItems:"center",
    paddingTop:80
    },
    registorButton:{
        backgroundColor:"white",
        color:"#2C6BED",
        borderRadius:2,
        borderWidth:1,
        borderColor:"#2C6BED",
        margin:10,
        padding:8,
    },
    image:{
      width:120,
      height:120,
      borderRadius:10,
     marginBottom:20
    },
    inputContianer:{
     width:250,
     height:40,
     padding:10,
     margin:5,
     borderWidth:0.5,
     borderColor:"#2C6BED",
    },
})

export default logIN