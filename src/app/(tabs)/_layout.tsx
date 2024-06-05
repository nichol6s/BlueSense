import { Tabs } from 'expo-router';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'light',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#f3f7fc',
        },
        tabBarLabel: () => false
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="sensors" color={color} size={24} />,
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tabs.Screen
        name="ocean"
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="waves" color={color} size={24} />,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "black"
        }}
      />
    </Tabs>
  );
}
