import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'

const otherPerson = () => {
  return (
    <View style={stylies.contianer}>
      <Text style={stylies.text}>name</Text>
      <Image source={{uri:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"}}
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