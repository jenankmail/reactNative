import { View, Text ,Image,StyleSheet,TextInput,Button,Pressable} from 'react-native'
import React from 'react'
import {auth} from '../Firebase/firebase-config ';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAvoidingView } from 'react-native';
import { useState,useEffect } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase-config ';
import { useLayoutEffect } from 'react';
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
useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false, // Hide the header title
    title:"GCC"
  });
}, []);
const signIn=async ()=>{
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Query Firestore to check if the user exists
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size === 0) {
      console.log('User not found in Firestore.');
      navigation.replace("logIN")
      // Handle case where user does not exist in Firestore
    } else {
      console.log('User found in Firestore.');
      // User exists in Firestore, navigate to home screen
      navigation.replace('Home');
    }
  } catch (error) {
    const errorMessage = error.message;
    alert('Sign in error:email or password not valid', errorMessage);
    // Handle login error (e.g., display error message to the user)
  }
}
const handleChangeText = (text) => {
  // Replace each character in the text with a dot or a star
  const hiddenText = text.replace(/./g, '*'); // You can use '*' for stars or '.' for dots
  setPassword(hiddenText);
};
  return (
   
    <View  style={stylies.container}> 
    <View style={stylies.box}>
    <Image source={{uri:'https://www.gcc-sg.org/Style%20Library/Images/logo-x2.png'}} style={stylies.image}/>
    
    <View >
   
        <TextInput 
        placeholder='اسم المستخدم' value={email} onChangeText={(text)=>setEmail(text)} style={stylies.inputContianer} />
        <TextInput 
        placeholder='كلمة المرور '  value={password} onSubmitEditing={signIn}      secureTextEntry   onChangeText={(text)=>setPassword(text)}
         style={[stylies.inputContianer, { textAlign: 'right' }]}/>
 
    </View>
    <Text style={{fontSize:6,color:"#3b8a50",right:90,padding:10}}>هل نسيت كلمة المرور</Text>

    <View style={{width:100,alignItems:"center",left:10,padding:10}} >
     <Pressable onPress={signIn} style={stylies.registorButton}>
     <Text style={{ textAlign: 'center', color:"white", }}>
      
     دخول
     
     </Text>
     </Pressable>
     </View>
     <View style={{height:100}}/>
     </View>
    </View>
    
  )
}

const stylies=StyleSheet.create({
    box:{
      alignItems:"center",
      paddingTop:80,
     backgroundColor:"white",
     borderBottomLeftRadius:250,
     borderTopRightRadius:250,
     shadowColor: 'rgba(58, 97, 214, 0.5)',
     shadowOpacity: 1,
    },
    container:{
    flex:1,
    backgroundColor:"#145e28"

    },
    registorButton:{
      right:10,
        backgroundColor:"#145e28",
        color:"#D5B895",
        borderRadius:2,
        borderWidth:2,
        borderColor:"#145e28",
        height:45,
        width:70,
        margin:10,
        padding:8,
        
    },
    image:{
      width:150,
      height:150,
      borderRadius:10,
     marginBottom:20,
     borderColor:"#145e28",
    },
    inputContianer:{
     width:250,
     height:40,
     padding:10,
     margin:5,
     borderWidth:1,
     borderColor:"#D5B895",
    },
})

export default logIN