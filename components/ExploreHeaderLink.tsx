import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import * as Haptics from 'expo-haptics'
import Animated from 'react-native-reanimated'



interface Props {
    onCategoryChanged: (category: string) => void
}

const ExploreHeaderLink = ({onCategoryChanged}: Props) => {
    const scrollRef = useRef<ScrollView>(null)
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex, setActiveIndex] = useState(3);

    
    return (
        <SafeAreaView style = {{flex:1, backgroundColor: '#fff'}}>
            <View style = {styles.conatiner}>
                <View style = {styles.actionRow}>
                    <Link href = {'/(modals)/booking'} asChild>
                        <TouchableOpacity style = {styles.searchBtn} >
                            <Feather name = 'search' size = {24} />
                            <View>
                                <Text style = {{fontFamily: 'mon-sb'}}> Where to?</Text>
                                <Text style = {{fontFamily: 'mon', color: Colors.grey}}>Discover all of New Jersey</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>
                    
                    <TouchableOpacity style = {styles.filterBtn}>
                        <Ionicons name = 'options-outline' size = {24} />
                    </TouchableOpacity>
                </View>


                <View>
                <Text style = {{fontSize: 20, fontFamily: 'mon-sb', textAlign: 'center', marginTop: 30}}>Additional Attractions</Text>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: "#fff",
        height: 150,


    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    
        gap: 10

    },
    filterBtn:{
         padding: 10,
         borderWidth: 1,
         borderColor: Colors.grey,
         borderRadius:24
    },
    searchBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderColor:'#c2c2c2',
        borderWidth: StyleSheet.hairlineWidth,

        backgroundColor: '#fff',
        flex: 1,
        padding: 14,
        borderRadius: 30,
        
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset:{
            width:1,
            height: 1
        },
        
    },
    categoryText: {
        fontSize:14,
        fontFamily: 'mon-sb',
        color: Colors.grey,

    },
    categoryTextActive: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: '#000'
    },
    categoriesBtn:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    categoriesBtnActive:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
       
    }
})
export default ExploreHeaderLink