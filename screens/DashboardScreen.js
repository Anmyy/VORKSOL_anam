import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ThirdScreen from './ThirdScreen';
import ChartScreen from './ChartScreen';
import NotificationScreen from './NotificationScreen';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  
  return (
      <Tab.Navigator screenOptions={{headerShown: false,}}>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name='Profile' component={ProfileScreen}
          options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name='Add' component={ThirdScreen} 
          options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons name="add-circle" size={35} color="#87CEFA" />
          ),
        }}/>
        <Tab.Screen name='Chart' component={ChartScreen} 
          options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons name="stats-chart-outline" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name='Notification' component={NotificationScreen} 
          options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
        }}/>
      </Tab.Navigator> 

  )
}

export default DashboardScreen

