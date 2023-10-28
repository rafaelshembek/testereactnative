import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import axios from "axios";



export default () => {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        const Teste = async () => {
            try {
                const response = await axios.get("https://api.github.com/users/your_name_github")
                setDados(response.data)
            } catch (error) {
                // console.log(error);
            }

        }

        Teste();

    }, [])

    return (
        <View style={styles.fundo}>
            <View style={styles.cardAvatar}>
                <Image style={styles.avatar} source={{ uri: dados.avatar_url }} />
                <Text style={styles.name}>{dados.name}</Text>
                <Text style={styles.bios}>{dados.bio}</Text>
            </View>
            <View>
                <Text style={styles.location}>Cidade: </Text>
                <Text style={styles.cidade}>{dados.location}</Text>
            </View>
            <View style={styles.flexbox}>
                <Text style={styles.followers}>Seguidores</Text>
                <Text style={styles.followers}>{dados.followers}</Text> 
                <Text style={styles.following}>Seguindo</Text>
                <Text style={styles.following}>{dados.following}</Text>
            </View>
        </View>
    )
}
// style do css da pagina home
const styles = StyleSheet.create({
    fundo: {
        backgroundColor: "#6A00D7",
    },
    styleTitle: {
        margin: 12,
        padding: 20,
        color: "#fff"
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        marginTop: 7
    },
    status: {
        color: "#fff",
        marginLeft: 40,
        paddingTop: 20
    },
    bios: {
        margin: 12,
        textAlign: "center",
        color: "#fff",
        marginTop: 20,
        marginLeft: 85,
        position: "absolute"
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 100,
    },
    cardAvatar: {
        marginTop: 50,
        marginLeft: 30
    },
    location: {
        color: "#fff",
        marginTop: 12,
        marginLeft: 12
    },
    cidade: {
        color: "#fff",
        marginLeft: 12,
        marginBottom: 12
    },
    flexbox:{
    flexDirection:"row",
    marginLeft:100,
    alignItems: "center"
    },
    followers:{
        color:"#fff",
        padding: 12
    },
    following: {
        color: "#fff",
        padding: 12
    }
})
