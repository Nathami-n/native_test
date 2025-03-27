import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import ExploreHeader from '@/components/ExploreHeader'

const IndexTab = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen  options={{
        header: () => {
          return <ExploreHeader/>
        }
      }}/>

    </SafeAreaView>
  )
}

export default IndexTab