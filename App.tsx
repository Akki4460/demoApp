import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert
} from "react-native"

function App(){
  return(
    <SafeAreaView>
      <View>
        <Text>Hey Akki!!!</Text>
        <Button title="Press Me" onPress={()=> Alert.alert('Pressed an Button')}></Button>
      </View>
    </SafeAreaView>
  )
}

export default App