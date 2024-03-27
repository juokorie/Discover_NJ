import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import * as Haptics from 'expo-haptics'
import Animated from 'react-native-reanimated'


const categories = [
    {
        name: 'Beaches',
        icon: 'umbrella-beach',
        company: 'MaterialCommunityIcons',
    },
    {
        name: 'Nature',
        icon: 'tree' //Foundation
    },
    {
        name: 'Fine Arts',
        icon: 'paintbrush' //Octicons
    },
    {
        name: 'Attractions',
        icon: 'camera' //Feather
    },
    
]
interface Props {
    onCategoryChanged: (category: string) => void
}

const ExploreHeader = ({onCategoryChanged}: Props) => {
    const scrollRef = useRef<ScrollView>(null)
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex, setActiveIndex] = useState(3);

    const selectCategory = (index: number)=> {
        const selected = itemsRef.current[index]
        setActiveIndex(index)

        selected?.measure((x)=> {
            scrollRef.current?.scrollTo({x: x-16, y: 0, animated: true})
        })

        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        onCategoryChanged(categories[index].name)
    }
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


                <ScrollView  ref = {scrollRef} horizontal pointerEvents='auto' showsHorizontalScrollIndicator = {false} contentContainerStyle = {{ alignItems: "center",gap: 23, paddingHorizontal: 16,}}>
                    {categories.map((item, index ) => (
                        <TouchableOpacity 
                        onPress = {() => selectCategory(index)}
                        key = {index} 
                        ref={(el) => itemsRef.current[index] = el}
                        style = {activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn }>
                            <FontAwesome6 size = {25} name = {item.icon as any}  color ={activeIndex === index ? '#000' : Colors.grey} />
                            <Text  style = {activeIndex === index ? styles.categoryTextActive : styles.categoryText } >{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
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
        paddingBottom: 16,
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
        paddingBottom: 8,
    
    },
    categoriesBtnActive:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 8,
    }
})
export default ExploreHeader