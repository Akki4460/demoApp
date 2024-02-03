import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'

const AppDemo = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Text>AppDemo</Text>
            <FlatCards />
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppDemo