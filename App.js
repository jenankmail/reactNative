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
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
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
            headerTitle: () => <ChatTitle navigation={navigation} photoURL="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D" />,
          })}
        />
        <Stack.Screen name="about" component={about} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
