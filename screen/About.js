import { View,Text,StyleSheet } from "react-native";
export default function About(){
return(
    <View style={styles.container}>
        <Text style={styles.text}>hello about Screen </Text>
    </View>
);
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
        },
        text:{
            fontSize:24,
            fontWeight:"bold",
            marginBottom:16,
        }
    }
)