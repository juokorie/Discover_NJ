import {View, Text} from 'react-native'
import React, { useMemo, useState } from 'react'
import {Stack, Tabs} from 'expo-router'
import { Link } from 'expo-router'
import ExploreHeaderLink from '@/components/ExploreHeaderLink'
import Listings from '@/components/Listings'
import listingsData from '@/assets/data/discover-nj_link.json'
import ListingsMap from '@/components/ListingsMap'
import listingsDataGeo from '@/assets/data/discover-nj.geo.json'
import ListingsBottomSheet from '@/components/ListingsBottomSheet'
import { Feature } from '@/interfaces/listingGeo'
import ExploreHeader from '@/components/ExploreHeader'

import ListingsLink from '@/components/ListingsLink'


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
        <ListingsLink listings = {items} category= {category} />
        
       </View>
    )
}

export default Page