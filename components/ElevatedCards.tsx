import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={{fontSize:20}}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>More...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    card:{
        flex:1,
        width:100,
        height:100,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:8
    },
    elevatedCard:{
        backgroundColor:'#CAD5E2',
        // This property to give elevation up to the card
        elevation:4,
        // This are shadow properties
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#ff5354',
        shadowOpacity:0.4,
        shadowRadius:2
    },
    container:{
        padding:8,
    }
})