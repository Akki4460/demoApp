import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCards from './ElevatedCards'

const AppDemo = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards />
            <ElevatedCards />
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppDemo