import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {

    const contacts = [
        {
            uid:1,
            name:'lorem2 2',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            uid:2,
            name:'lorem2 2',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            uid:3,
            name:'lorem2 2',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            uid:4,
            name:'lorem2 2',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            uid:5,
            name:'lorem2 2',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
        },
    ]

  return (
    <View>
      <Text style={{fontSize:20, paddingHorizontal:8,fontWeight:'bold'}}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {/* This is used for iteration and specially that second (pink) bracket, can be used as a () or {}, but incase if we use curly brackets there is need to type return to that or else by () return keyword is not necessary  */}
        {contacts.map(({uid,name,info,img})=>(
            <View key={uid} style={styles.userCard}>
                <Image source={{
                    uri: img
                }}
                style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userInfo}>{info}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginBottom:20
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#0B60B0',
        padding:5,
        margin:2,
        borderRadius:5
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight:10,
        marginLeft:5
    },
    userName:{
        color:'#fff',
        fontSize:16,
        fontWeight:'500'
    },
    userInfo:{
        fontSize:12,
        // color:'#000000'
    }
    
})