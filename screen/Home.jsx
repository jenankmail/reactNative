import { View,Text,StyleSheet ,Image,FlatList} from "react-native";
import ChatRoomItems from "../components/ChatRoomItems";
import ChatRoomData from "../assets/dummy-data/ChatRooms";


export default function Home({navigation}){
    
enterChat=(id,chatName)=>{
navigation.navigate("chatScreen",{
    id,
    chatName
})
}

return(
    <View style={styles.page}>
        <FlatList data={ChatRoomData}
        renderItem={({item})=> <ChatRoomItems chatRoom={item}/>
    }/>
        
     </View>
);
}
const styles=StyleSheet.create(
    {
        page:{
            backgroundColor:"white",
            flex:1,
        }
    }
)