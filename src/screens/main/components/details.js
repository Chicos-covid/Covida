import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'


function Details(props) {
    return (
        <ScrollView>
            <View style={styles.top}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.details}>
                    <Image
                        style={styles.cover}
                        source={require('../../../../assets/logo_ico.png')}
                    />
                    <Text style={styles.description}>{props.description_full}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
    trailer: {
        height: 200,
        marginBottom: 20,
    },
    details: {
        flexDirection: "row",
        marginBottom: 10
    },
    cover: {
        width: 125,
        height: 190
    },
    title: {
        color: "#44546b",
        fontSize: 18,
        fontWeight: "bold"
    },
    top: {
        borderBottomWidth: 1,
        borderBottomColor: "#eaeaea",
        padding: 20,
        backgroundColor: "white"
    },
    bottom: {
        padding: 20,
        flex: 1
    },
    description: {
        fontSize: 15,
        lineHeight: 22.5,
        color: "#4c4c4c",
        marginLeft: 10,
        flex: 1
    }
});

export default Details