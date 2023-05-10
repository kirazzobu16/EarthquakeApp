import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainMenu from "./Components/Home/MainMenu"
import Information from "./Components/Home/Information/Information"
import Location from "./Components/Home/Location/Location"
import AlarmButton from "./Components/Home/AlarmButton/AlarmButton"
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Meeting from "./Components/Home/Location/Meeting/Meeting";
import BeforeEarthquake from "./Components/Home/Information/EarthquakeInformation/BeforeEartquake";
import NowEarthquake from "./Components/Home/Information/EarthquakeInformation/NowEarthquake";
import AfterEarthquake from "./Components/Home/Information/EarthquakeInformation/AfterEarthquake";
import EarthquakeCase from "./Components/Home/Information/EarthquakeInformation/EarthquakeCase";
import Furniture from "./Components/Home/Information/EarthquakeInformation/BeforeEartquake/Furniture";
import InHouse from "./Components/Home/Information/EarthquakeInformation/NowEarthquake/InHouse";
import InOpen from "./Components/Home/Information/EarthquakeInformation/NowEarthquake/InOpen";
import InCar from "./Components/Home/Information/EarthquakeInformation/NowEarthquake/InCar";
import InTransport from "./Components/Home/Information/EarthquakeInformation/NowEarthquake/InTransport";
import InOut from "./Components/Home/Information/EarthquakeInformation/AfterEarthquake/InOut";
import InClosedArea from "./Components/Home/Information/EarthquakeInformation/AfterEarthquake/InClosedArea";


function App(){
 
  const Stack=createNativeStackNavigator()
  const Tab=createBottomTabNavigator()

  const Home=()=>{
    return(
      
      <Stack.Navigator screenOptions={{
       headerTitle:"Geri",
       headerStyle:{
        backgroundColor:"red",
       },
       headerTitleStyle:{
        fontSize:17,  
       },
       headerBackTitleVisible:true,
       headerBackTitle:"Geri",
       headerTintColor:"white"
      }}>
        <Stack.Screen options={{headerShown:false}} name="MainMenu" component={MainMenu} />
        <Stack.Screen  name="Information" component={Information}/>
        <Stack.Screen name="Location" component={Location}/>
        <Stack.Screen name="AlarmButton" component={AlarmButton}/>
        <Stack.Screen name="MeetingPlace" component={Meeting}/>
        <Stack.Screen name="BeforeEarthquake" component={BeforeEarthquake}/>
        <Stack.Screen name="NowEarthquake" component={NowEarthquake}/>
        <Stack.Screen name="AfterEarthquake" component={AfterEarthquake}/>
        <Stack.Screen name="EarthquakeCase" component={EarthquakeCase}/>
        <Stack.Screen name="Furniture" component={Furniture}/>
        <Stack.Screen name="InHouse" component={InHouse}/>
        <Stack.Screen name="InOpen" component={InOpen}/>
        <Stack.Screen name="InCar" component={InCar}/>
        <Stack.Screen name="InTransport" component={InTransport}/>
        <Stack.Screen name="InOut" component={InOut}/>
        <Stack.Screen name="InClosedArea" component={InClosedArea}/>
      </Stack.Navigator>
        
            
    )
  }

  return(
      <NavigationContainer >
        <Tab.Navigator
        initialRouteName="Ana Menü"
        screenOptions={({ route }) => ({
         
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Ana Menü') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Geri Dön') {
              iconName = focused ? 'arrow-left' : 'arrow-left';
              
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          
        })}
      >
          
          <Tab.Screen  name="Ana Menü" component={Home}/>    
        </Tab.Navigator>  
      </NavigationContainer>
  )

}

export default App;