import React from 'react'
import {Tabs} from 'expo-router'
import Colors from '@/constants/Colors'
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
const Layout = () =>{
    return(
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary, 
        tabBarLabelStyle:{
            fontFamily:'mon-sb'
        }
        }}>
        <Tabs.Screen name ="Home" options ={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => <AntDesign name="home" size={24} color={color} />}}
        />
        
        <Tabs.Screen name ="Reviews" options ={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => <FontAwesome name="map-o" size={22} color={color} />}}
        />
        <Tabs.Screen name ="Profile" options ={{
            tabBarLabel: 'Links',
            tabBarIcon: ({color, size}) => <Entypo name="link" size={24} color={color} />}}
        />
        <Tabs.Screen name ="Wishlist" options ={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, size}) => <Ionicons name="person-circle-outline" size={24} color={color} /> }}
        />
    </Tabs>
    
    )
}

export default Layout