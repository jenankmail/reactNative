import { View, Text,Image ,useWindowDimensions} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const chatTitle = ({photoURL}) => {
    const { width }=useWindowDimensions();

    return(
  <View style={{flexDirection:"row", justifyContent:"space-between",width:width-50 , paddingRight:30,alignItems:"center",marginLeft:-20}}>
    <Image source={{uri:photoURL}}
    style={{width:40,height:40,borderRadius:30}}/>
    <Text style={{flex:1,fontWeight:"bold",textAlign:"left",marginLeft:10}}>
     jenan
    </Text>
    <FontAwesome name="video-camera" size={24} color="black" style={{marginHorizontal:5}}/>
    <MaterialIcons name="call" size={24} color="black" style={{marginHorizontal:5}}/>
    <Entypo name="dots-three-vertical" size={24} color="black" style={{marginHorizontal:5}}/>
    </View>)
}

export default chatTitle