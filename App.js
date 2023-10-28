import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeScree from "./src/page/home/index";
import Youtube from "./src/components/ApiYoutube";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer >
    //   <tab.Navigator screenOptions={ {
    //     headerShown: false,
    //   } }>

    //     <Stack.Screen  name='home' component={HomeScree} />
    //     {/* <Stack.Screen name='service' component={ServiceScree} /> */}
    //   </tab.Navigator>
    // </NavigationContainer>
    <>
    <HomeScree></HomeScree>
    <Youtube></Youtube>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });