import { View, Text,Image ,useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import addChat from '../../screen/addChat';
import { auth } from '../../Firebase/firebase-config ';
const homeTitle = ({navigation}) => {

  const scannerBarCode=()=>{
    alert("Scanner Bar Code ");
  }
  const editProfile=()=>{
    navigation.navigate("editProfile");
  }
  const logOut=()=>{
    auth.signOut().then(()=>{
      navigation.replace("login");

    })
  }
    const { width }=useWindowDimensions();
    
    const photoURL1 = auth?.currentUser?.photoURL;
    return(
  <View style={{flexDirection:"row", justifyContent:"space-between",width , paddingLeft:20,alignItems:"center"}}>
    <Pressable onPress={editProfile}><Image source={{uri:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"}}
    style={{width:40,height:40,borderRadius:30}}/></Pressable>
    <Text style={{flex:1,textAlign:"center",fontWeight:"bold"}}>
    Gcc
    </Text>
    <Pressable onPress={scannerBarCode}>
    <Feather name="camera" size={24} color="black" style={{marginHorizontal:10}} /></Pressable>
    <Pressable onPress={()=>navigation.navigate('addChat')}>
    <Feather name="edit-2" size={24} color="black" style={{marginHorizontal:10}}/>
    </Pressable>
   <Pressable onPress={logOut}>
    <MaterialIcons name="logout" size={24} color="black" /></Pressable>
  </View>)
}

export default homeTitle