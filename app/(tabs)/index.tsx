import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const IndexTab = () => {
  return (
    <View>
     <Link href={`/listing/${3}`}>
     Listing page
     </Link>
    </View>
  )
}

export default IndexTab