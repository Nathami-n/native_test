import ExploreHeader from '@/components/ExploreHeader'
import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const IndexTab = () => {
  const onDataChanged = (category: string) => {

    console.log(category)
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen  options={{
        header: () => {
          return <ExploreHeader onCategoryChanged={onDataChanged}/>
        }
      }}/>

    </SafeAreaView>
  )
}

export default IndexTab