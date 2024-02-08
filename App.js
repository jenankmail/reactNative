// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logIN from './screen/logIN';
import registorScreen from './screen/registorScreen';
import Home from './screen/Home';
import about from './screen/About';
import chatScreen from './screen/chatScreen';
import HomeTitle from './components/Title/homeTitle';
import ChatTitle from './components/Title/chatTitle';
import addChat from './screen/addChat';
import EditProfile from './components/EditProfile';
import OtherPerson from './components/OtherPerson';
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#D5B895" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
       
        <Stack.Screen name="login" component={logIN} />
        <Stack.Screen name="registor" component={registorScreen} />
        <Stack.Screen name="addChat" component={addChat} />
        <Stack.Screen name="editProfile" component={EditProfile} />
        <Stack.Screen name="otherPerson" component={OtherPerson} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: () => <HomeTitle navigation={navigation} />,
          })}
        />   

             
        <Stack.Screen
          name="chatScreen"
          component={chatScreen}
          options={({ navigation }) => ({
            headerTitle: () => <ChatTitle navigation={navigation} />,
          })}
        />
        <Stack.Screen name="about" component={about} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
