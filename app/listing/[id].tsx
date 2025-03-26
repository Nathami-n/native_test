import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ListingPageParticular = () => {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default ListingPageParticular