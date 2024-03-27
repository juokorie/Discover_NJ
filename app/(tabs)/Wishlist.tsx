import {View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Tabs} from 'expo-router'
import { useAuth, useUser } from '@clerk/clerk-expo'
import {Link} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/constants/Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'

//this is the Wishlist Page

const Page = () =>{
    const {signOut, isSignedIn} = useAuth()
    const {user} = useUser()

    const[firstName, setFirstName]= useState(user?.firstName)
    const[LastName, setLastName] = useState(user?.lastName)
    const[email, setEmail] = useState(user?.emailAddresses[0].emailAddress)
    const [edit,setEdit] = useState(false)

    useEffect(()=>{
        if (!user) return;

        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.emailAddresses[0].emailAddress)
    }, [user])

    const onSaveUser = async() =>{

    }

    const onCaptureImage = async () => {

    }
    return(
       <SafeAreaView style = {defaultStyles.container}>
            <View style = {styles.headerContainer}>
                <Text style = {styles.header}>Profile</Text>
                <Ionicons name = "notifications-outline" size = {26}/>
            </View>

            {user && (
        <View style={styles.card}>
          <TouchableOpacity onPress={onCaptureImage}>
            <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            {!edit && (
              <View style={styles.editRow}>
                <Text style={{ fontFamily: 'mon-b', fontSize: 22 }}>
                  {firstName} {LastName}
                </Text>
                <TouchableOpacity onPress={() => setEdit(true)}>
                  <Ionicons name="create-outline" size={24} color={Colors.dark} />
                </TouchableOpacity>
              </View>
            )}
            {edit && (
              <View style={styles.editRow}>
                <TextInput
                  placeholder="First Name"
                  value={firstName || ''}
                  onChangeText={setFirstName}
                  style={[defaultStyles.inputField, { width: 100 }]}
                />
                <TextInput
                  placeholder="Last Name"
                  value={LastName || ''}
                  onChangeText={setLastName}
                  style={[defaultStyles.inputField, { width: 100 }]}
                />
                <TouchableOpacity onPress={onSaveUser}>
                  <Ionicons name="checkmark-outline" size={24} color={Colors.dark} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <Text>{email}</Text>
          <Text>Since {user?.createdAt!.toLocaleDateString()}</Text>
        </View>
      )}

            {isSignedIn && <Button title = 'Log out' onPress = {() => signOut()} color = {Colors.primary} />}
            
            {!isSignedIn && (
        <View style={styles.card}>
          <TouchableOpacity onPress={onCaptureImage}>
            <Ionicons name = 'person-circle-outline' style = {styles.avatar} size = {100}/>
          </TouchableOpacity>
          <View>
                <Text style = {{fontFamily: 'mon-sb', fontSize: 20}}>User Not Signed In</Text>
          </View>
          <Link href={'/(modals)/login'} asChild>
          <Button title="Log In" color={Colors.dark}  />
          </Link>
          <Text>{email}</Text>
          
        </View>
      )}
            
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        padding:24,
    },
    header:{
        fontFamily: 'mon-sb',
        fontSize: 24
    },
    card: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 16,
        marginHorizontal: 24,
        marginTop: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: {
          width: 1,
          height: 2,
        },
        alignItems: 'center',
        gap: 14,
        marginBottom: 24,
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.grey,
      },
      editRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      },
})
export default Page