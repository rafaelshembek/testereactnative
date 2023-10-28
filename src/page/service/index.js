import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default () => {
    return(
        <View style={meuStyle.corDoFundo}>
            <Text style={meuStyle.styleText}>Serviços</Text>
        </View>
    )

}

const meuStyle = StyleSheet.create({
    corDoFundo: {
        backgroundColor: "#fff"

    },
    styleText: {
        margin: 12,
        padding: 20
    }
})