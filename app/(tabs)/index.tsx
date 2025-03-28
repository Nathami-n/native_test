import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import { Stack } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import listingsData from "@/assets/data/airbnb-listings.json";

const IndexTab = () => {
  const [category, setCategory] = useState("Tiny homes");

  const items = useMemo(() => listingsData as any, []);
  
  const onDataChanged = (category: string) => {
    setCategory(category);
  }
  return (
    <SafeAreaView style={{flex: 1, marginTop: 80}}>
      <Stack.Screen  options={{
        header: () => {
          return <ExploreHeader onCategoryChanged={onDataChanged}/>
        }
      }}/>
      <Listings listings={[]} category={category}/>
    </SafeAreaView>
  )
}

export default IndexTab