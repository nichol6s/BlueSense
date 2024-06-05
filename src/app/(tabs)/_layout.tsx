import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="ocean"
        options={{
          title: 'Ocean',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'waves-arrow-up' : 'waves'} color={color} size={22} />
          ),
        }}
      />
    </Tabs>
  );
}
