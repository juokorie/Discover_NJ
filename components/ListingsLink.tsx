import {View, Text, FlatList, ListRenderItem, TouchableOpacity, StyleSheet, Linking} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { useState } from 'react'
import { Link } from 'expo-router'
import { Image } from 'react-native'
import { Listing } from '@/interfaces/listing'
import { Ionicons } from '@expo/vector-icons'
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated'
interface Props{
  listings: any[]
  category: string 
}

const ListingsLink = ({listings: items, category}: Props) =>{
    const [loading, setLoading] = useState(false)
    const listRef = useRef<FlatList>(null)
    useEffect(() => {
        console.log('Reload Listings: ', items.length)
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 200)
    }, [category])

    const renderRow : ListRenderItem<Listing> = ({item}) => (
        
            <TouchableOpacity onPress = {()=> Linking.openURL(item.listing_url)}>
                <Animated.View style = {styles.listing} entering={FadeInRight} exiting = {FadeOutLeft}>
                    <Image source = {{uri: item.medium_url}} style ={styles.image}/>
                    <TouchableOpacity style = {{position: 'absolute', right: 30, top: 30}}>
                        <Ionicons name = "heart-outline" size = {24} color = {'#000'} />
                    </TouchableOpacity>

                    <View style = {{flexDirection: 'row',justifyContent: 'space-between' }}>
                        <Text style = {{fontSize: 16, fontFamily: 'mon-sb'}}>{item.name}</Text>
                        <View style = {{ flexDirection: 'row', gap: 4}}>
                            <Ionicons name  = 'star' size = {16} color = {'#000'}/>
                            <Text style = {{fontFamily: 'mon-sb'}}>{item.rating}</Text>
                        </View>
                    </View>

                    <Text style  = {{fontFamily: 'mon'}}>{item.town}</Text>
                    <Text style  = {{fontFamily: 'mon', gap:0}}>{item.price}</Text>
                
                </Animated.View>
            </TouchableOpacity>
        
    )
    return (
        <View style = {defaultStyles.container}>
            <FlatList 
            renderItem={renderRow}
            ref = {listRef} 
            data = {loading ? []: items} 
            />
        </View>
    )
}
const styles = StyleSheet.create({
    listing:{
        padding:16,
        gap:10,
        //marginVertical: 16,
    },
    image:{
        width: "100%",
        height: 300,
        borderRadius: 10
    }
})
export default ListingsLink

