import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={{fontSize:20, paddingHorizontal:8,fontWeight:'bold'}}>Trending Places</Text>
      <ScrollView horizontal >
      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri:'https://images.unsplash.com/photo-1704419278774-fa691a032632?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }} 
            style={styles.cardImage}
            />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Lorem, ipsum</Text>
            <Text style={styles.cardLabel}>Lorem ipsum dolor sit amet.</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cupiditate eos distinctio repellat voluptatibus amet, culpa nam repudiandae eius quam.</Text>
            <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri:'https://images.unsplash.com/photo-1704419278774-fa691a032632?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }} 
            style={styles.cardImage}
            />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Lorem, ipsum</Text>
            <Text style={styles.cardLabel}>Lorem ipsum dolor sit amet.</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cupiditate eos distinctio repellat voluptatibus amet, culpa nam repudiandae eius quam.</Text>
            <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

export default FancyCards

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
        elevation:4
    },
    cardImage:{
        height:200,
        marginBottom:8,
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
        marginBottom:6
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
        color:'#000000'
    } 
})