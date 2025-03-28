import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import { Stack } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import listingsData from "@/assets/data/airbnb-listings.json";
import { View } from 'react-native'

const IndexTab = () => {
  const [category, setCategory] = useState("Tiny homes");

  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen  options={{
        header: () => {
          return <ExploreHeader onCategoryChanged={onDataChanged}/>
        }
      }}/>
     <View style={{marginTop: 15, flex:1}}>
     <Listings listings={items} category={category}/>
     </View>
    </SafeAreaView>
  )
}

export default IndexTab