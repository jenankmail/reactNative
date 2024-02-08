import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from 'react';
const otherPerson = ({navigation}) => {
  const route = useRoute();
  const {chatName,imageChat} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true, // Hide the header title
      title:""
    });
  }, []);
  return (
    <View style={stylies.contianer}>
      <Text style={stylies.text}>{chatName}</Text>
      <Image source={{uri:imageChat}}
    style={stylies.image}/>
      <Text>0597477150</Text>
    </View>
  )
}
const stylies=StyleSheet.create({
    contianer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        margin:10,
        width:100,
        height:100,
        borderRadius:30},
    text:{
        fontWeight:"bold",
        fontSize:25,

    }
})

export default otherPerson