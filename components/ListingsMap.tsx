import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import { defaultStyles } from '@/constants/Styles';
import { ListingGeo, Feature } from '@/interfaces/listingGeo';
import { useRouter } from 'expo-router';

interface Props {
    listings: any;
}
const INITIAL_REGION = {
    latitude: 40.2115,
    longitude: -74.6797,
    latitudeDelta: 2,
    longitudeDelta: 2,
}
const ListingsMap = ({listings}: Props) => {
    const router = useRouter()
    const onMarkerSelected = (item: Feature) =>{
        router.push(`/listing/${item.id}`)
    }
    return (
        <View style = {defaultStyles.container}>
            <MapView 
            initialRegion={INITIAL_REGION}
            style = {StyleSheet.absoluteFill}
            provider= {PROVIDER_DEFAULT}
            showsUserLocation 
            showsMyLocationButton>

            {listings.features.map((item: Feature) =>(
                <Marker key = {item.id} 
                onPress={() => onMarkerSelected(item)}
                coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude
                }}>
                    <View style = {styles.marker}>
                        <Text style = {styles.markerText}>{item.price}</Text>
                    </View>
                </Marker>
            ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    marker: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        elevation:10,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset:{
            width:1,
            height: 10
        },
        borderRadius: 15
    },
    markerText:{
        padding: 6,
        fontSize: 14,
        fontFamily: 'mon-sb'
    }
})
export default ListingsMap