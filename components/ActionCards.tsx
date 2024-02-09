import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCards = () => {

// Function to Open link from a button {TouchableOpacity}
    function openLink(webLink: string){
        Linking.openURL(webLink)
    }

  return (
    <View>
      <Text>ActionCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardTitle}>Lorem, ipsum</Text>
        <Image
            source={{
                uri:'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }} 
            style={styles.cardImage}
            />
        <View style={styles.cardBody}>
            <Text style={styles.cardLabel}>Lorem ipsum dolor sit amet.</Text>
            <Text numberOfLines={3} style={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sint ullam sed ipsa placeat at similique provident ex eius praesentium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cupiditate eos distinctio repellat voluptatibus amet, culpa nam repudiandae eius quam.</Text>
            <View style={styles.cardFooter}>
                <TouchableOpacity onPress={() => openLink('https://reactnative.dev/docs/touchableopacity')}>
                    <Text>Read More...</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ActionCards

const styles = StyleSheet.create({
    card:{
        width:320,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:6,
        
    },
    cardElevated:{
        backgroundColor:'#ffffff',
        elevation:5
    },
    cardImage:{
        height:200,
        margin:8,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
        marginTop:5,
        paddingHorizontal:8
    },
    cardLabel:{
        color:'#000000',
        fontSize:16,
        fontWeight:'500',
        marginBottom:4
    },
    cardDescription:{
        color:'#000000',
        marginBottom:15,
        flexShrink:1,
        textAlign:'justify'
    },
    cardFooter:{
    }
})