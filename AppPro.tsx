import React from "react";

import {
    Text,
    View,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
    Button,
    Alert
} from "react-native"

// This provides some features to write less buggy code
function AppPro() : JSX.Element{

    const isDarkMode = useColorScheme() === 'dark'

    return(
        <SafeAreaView>
            <View style={Styles.container}>
                {/* Concluding IF dark mode is on change text to light and vise-versa */}
                <Text style={isDarkMode?Styles.whiteTxt:Styles.darkTxt}>AppPro.tsx</Text>
                {/* Button just for demo with event onPress */}
                <Button title="Hi" onPress={()=>Alert.alert("Hiii!!!")}></Button>
            </View>
        </SafeAreaView>
    )

}


    const Styles = StyleSheet.create({
        container : {
            backgroundColor:"red",
        },

        whiteTxt:{
            color: "#FFFFFF"
        },

        darkTxt:{
            color: "#000000"
        }
    })


export default AppPro