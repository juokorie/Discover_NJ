import {View, Text} from 'react-native'
import React, { useMemo, useState } from 'react'
import {Stack, Tabs} from 'expo-router'
import { Link } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingsData from '@/assets/data/discover-nj.json'
import ListingsMap from '@/components/ListingsMap'
import listingsDataGeo from '@/assets/data/discover-nj.geo.json'
import ListingsBottomSheet from '@/components/ListingsBottomSheet'
import { Feature } from '@/interfaces/listingGeo'


const Page = () =>{
    const [category, setCategory] = useState('Beaches')
    const items = useMemo(() => listingsData as any, [])
    const onDataChanged = (category: string) =>{
        setCategory(category)
    }

    return(
       <View style = {{flex: 1, marginTop: 150}}>
        <Stack.Screen options = {{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>,
        }}/>
        <Listings listings = {items} category= {category} />
        
       </View>
    )
}

export default Page