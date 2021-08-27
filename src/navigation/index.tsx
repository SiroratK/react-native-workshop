/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AboutPage from '../screen/AboutPage';
import Country from '../screen/Country';
import HomeScreen from '../screen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = focused ? 'globe' : 'globe';
            } else if (route.name === 'Country') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'About') {
              iconName = focused
                ? 'information-circle-outline'
                : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: route.name === 'Country' ? false : true,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Country" component={Country} />
        <Tab.Screen name="About" component={AboutPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
