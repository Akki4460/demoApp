import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={{fontSize:20}}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri:'https://images.unsplash.com/photo-1704419278774-fa691a032632?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }} 
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Lorem, ipsum.</Text>
            <Text style={styles.cardLabel}>Lorem ipsum dolor sit amet.</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cupiditate eos distinctio repellat voluptatibus amet, culpa nam repudiandae eius quam.</Text>
            <Text style={styles.cardFooter}>Footer</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    card:{

    },
    cardElevated:{

    },
    cardImage:{
        height:200
    },
    cardBody:{},
    cardTitle:{},
    cardLabel:{},
    cardDescription:{},
    cardFooter:{} 
})