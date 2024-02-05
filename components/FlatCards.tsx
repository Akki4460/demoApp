import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View style={styles.bkcol}>
      <Text style={styles.txtProp}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    bkcol:{
        // backgroundColor:'black',
        paddingHorizontal:10
    },
    txtProp:{
        // color:"red",
        fontSize:20
    },
    container:{
      flex:1,
      flexDirection:'row'
    },
    cards:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100,
      borderRadius:5,
      margin:8
    },
    cardOne:{
      backgroundColor:'#FF5354'
    },
    cardTwo:{
      backgroundColor:'#50DBB4'
    },
    cardThree:{
      backgroundColor:'#5DA3FA'
    }
})

export default FlatCards