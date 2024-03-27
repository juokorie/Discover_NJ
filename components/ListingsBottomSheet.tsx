import {View, Text} from 'react-native'
import React, { useMemo, useRef } from 'react'
import { Listing } from '@/interfaces/listing'

import { useMagicLink } from '@clerk/clerk-expo';
import Listings from '@/components/Listings';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet/';



interface Props{
    listings: Listing[];
    category: string;
}
const ListingsBottomSheet = ({listings, category}: Props) => {
    const BottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = useMemo(() => ['10%', '1000%'], [])
    return(
        <GestureHandlerRootView style = {{flex:1}}>
        <BottomSheet
        ref={BottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        children={()=> <Listings listings = {listings} category= {category} />}
      />
      </GestureHandlerRootView>
       
    )
}

export default ListingsBottomSheet