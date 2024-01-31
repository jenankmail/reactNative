import { View, Text,Image ,useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import addChat from '../../screen/addChat';
import { auth } from '../../firebase';

const homeTitle = ({navigation,photoURL}) => {
  
  const logOut=()=>{
    auth.signOut().then(()=>{
      navigation.replace("login");

    })
  }
    const { width }=useWindowDimensions();
    
    const photoURL1 = auth?.currentUser?.photoURL;
    return(
  <View style={{flexDirection:"row", justifyContent:"space-between",width , paddingRight:30,alignItems:"center"}}>
    <Image source={{uri:auth.currentUser.photoURL}}
    style={{width:40,height:40,borderRadius:30}}/>
    <Text style={{flex:1,textAlign:"center",fontWeight:"bold"}}>
    Signal
    </Text>
    
    <Feather name="camera" size={24} color="black" style={{marginHorizontal:10}} />
    <Pressable onPress={()=>navigation.navigate('addChat')}>
    <Feather name="edit-2" size={24} color="black" style={{marginHorizontal:10}}/>
    </Pressable>
   <Pressable onPress={logOut}>
    <MaterialIcons name="logout" size={24} color="black" /></Pressable>
  </View>)
}

export default homeTitle