import { View, Text ,StyleSheet,TextInput,Pressable} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../Firebase/firebase-config ';
import { setDoc ,doc} from '@firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import { useRoute } from "@react-navigation/native";
import { auth } from '../../Firebase/firebase-config ';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc } from '@firebase/firestore';


const MassegeInput = ({id}) => {

  const [inputMessage, setInputMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          setCurrentUser(user);
      });

      return () => unsubscribe();
  }, []);

 
  const sendMessage = async () => {
    try {
        if (!currentUser) {
            console.log('User is not authenticated');
            return;
        }

        const timestamp = new Date();
        const messageId = `${currentUser.uid}-${timestamp.getTime()}`;
        
        const chatRef = doc(db, 'chats', id);
        const messageRef = collection(chatRef, 'messages');
        
        await addDoc(messageRef, {
            messageId: messageId,
            timestamp: timestamp,
            message: inputMessage,
            senderId: currentUser.uid,
            senderName: currentUser.displayName,
            senderEmail: currentUser.email,
        });

        // Update the lastMessage and time fields in the chats collection
        await setDoc(chatRef, { 
            lastMessage: inputMessage,
            time: formatTime(timestamp)
        }, { merge: true });

        setInputMessage("");
        console.log('Message sent successfully.');
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

// Function to format the timestamp to "11:20 am" style
const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return formattedTime;
}



  return (
    <View style={styles.root}>
    <View style={styles.inputContainer}>
    <Feather name="smile" size={40} color="grey" style={styles.iconSmile} />
        <TextInput style={styles.input}
        value={inputMessage}
        onChangeText={setInputMessage}
        onSubmitEditing={sendMessage}
        placeholder='Single Message ...'/>
        <Feather name="camera" size={24} color="grey" />
        <MaterialCommunityIcons name="microphone-outline" size={24} color="grey" />
    </View> 
        <View style={styles.buttonContainer}>

       <Pressable onPress={sendMessage} style={styles.buttonText}>{inputMessage?<Ionicons name="send" size={24} color="black" />:<Feather name="plus" size={24} color="white" />}
</Pressable>
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
root:{
    flexDirection:"row",
    padding:10,
   
},
input:{
    flex:1,
    marginHorizontal:5,
},
inputContainer:{
    backgroundColor:"#f2f2f2",
    flex:1,
    marginRight:10,
    borderRadius:25,
    borderWidth:1,
    borderColor:"lightgrey",
    alignItems:"center",
    flexDirection:"row",

},
iconSmile:{
marginTop:10
,
marginHorizontal:5,
},
buttonContainer:{
    width:50,
    height:50,
    backgroundColor:"#3777f0",
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
},
buttonText:{
    color:"white",
    fontSize:35,
   
}
});

export default MassegeInput
