import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, Text, FlatList, SafeAreaView, Image } from "react-native";

export default () => {

    const [dados, setDados] = useState([]);


    const ApiKey = "AIzaSyDIIVGIxJo6-Qj95GbrcCeIjmINfm-GhWA";
    const ApiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${ApiKey}&part=snippet&chart=mostPopular&regionCode=BR`;

    useEffect(() => {

        const GetVideosYoutube = async (urlApi) => {
            try {
                const response = await axios.get(urlApi);
                setDados(response.data.items);
            } catch (error) {
                console.log(error);
            }
        }
        GetVideosYoutube(ApiUrl);

    }, [])
    // return description.length > maxLength ? description.substring(0, maxLength) + '...' : description
    const  Description = (description, maxLength) => {
        return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
    }

    dados.map((e) => {
        console.log("=================================================================")
        console.log(e.snippet.title);
    })

    return (

        <SafeAreaView style={styles.body}>
                               <View style={styles.header_youtube}>
                        <Text style={styles.titleYoutube}>Youtube</Text>
                        <Text style={styles.titledescrition}>Os 5 videos mais popular:</Text>
                    </View>
            <FlatList
            // inverted={true}
                showsVerticalScrollIndicator={false} 
                data={dados}
                renderItem={({ item }) =>
                    <View style={styles.bodyYoutube}>
                        <View style={styles.video_avatar}>
                            <Image style={styles.thumbnails} source={ { uri: item.snippet.thumbnails.medium.url} } />
                        </View>
                        <View style={styles.title_avatar}>
                            <Image style={styles.avatar} source={ { uri: item.snippet.thumbnails.medium.url} } />
                            <Text style={styles.channelTitle}>{item.snippet.title}</Text>
                        </View>
                            {/* <Text style={styles.description}>{Description(item.snippet.description, 200)}</Text> */}
                    </View>
                }

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
    backgroundColor:"#fff",
    height: 600
    },
    video_avatar:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    thumbnails: {
        flex:1,
        height: 250,
        width: 100,
        // borderRadius:100,
        resizeMode: 'stretch',
        // margin:12
    },
    header_youtube:{
        margin:30,
        flexDirection:"row",
        alignItems:"center"
    },
    titleYoutube:{
        fontSize:20,
        color:"#333",
        fontWeight:"900"
    },
    bodyYoutube:{
        color:"#333",
    },
    titledescrition:{
        color:"#333",
        marginLeft:12
    },
    title_avatar:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:12,
        padding:12
        // flexWrap:"wrap",
    },
    avatar:{
        height:40,
        width:40,
        borderRadius:100,
        margin:12
    },
    channelTitle:{
        color:"#000",
        // fontSize:15,
        fontWeight:"900",
        alignItems:"center"
    },
    description:{
        color:"#333"
    }
})