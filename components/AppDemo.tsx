import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCards from './ElevatedCards'
import FancyCards from './FancyCards'
import ActionCards from './ActionCards'

const AppDemo = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards />
            <ElevatedCards />
            <FancyCards />
            <ActionCards />
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppDemo