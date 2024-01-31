
import { StyleSheet } from "react-native"
const styles=StyleSheet.create(
    {
        container:{
          flexDirection:"row",
          padding:10,           
        },
        badegContianer:{
            backgroundColor:"#3872E9",
            width:20,
            height:20,
            borderRadius:10,
            borderWidth:1,
            borderColor:"white",
            position:"absolute",
            alignItems:"center",
            left:45,
            top:10,

        },
        badegText:{
            fontSize:12,
            color:"white"
        },
      rightContianer:{
        flex:1,
        justifyContent:"center",
      },
        row:{
         flexDirection:"row",
         justifyContent:"space-between",
        marginRight:10,
        },
        name:{
            fontWeight:"bold",
            fontSize:18,
            marginBottom:3,
        },
        text:{
           color:"grey",
        },
        img2:{
            width:50,
            height:50,
            borderRadius:30,
            marginRight:10,
        }
    }
)
export default styles;