import Colors from '@/constants/Colors'
import { Tabs } from 'expo-router'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: "mon-sb"
      }
    }}
    >
      <Tabs.Screen name="index" options={{
        tabBarLabel: "Explore",
        tabBarIcon: ({color, size}) => 
          <FontAwesome5 name="search" color={color} size={size}/>
      }} />
    </Tabs>
  )
}

export default TabsLayout