import React from 'react';
import { Layout } from '@ui-kitten/components';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';



function Loading(props){
    return(
        <Layout style={styles.container}>
            <Image 
                source={require('../../../assets/logo.jpeg')}
                style={styles.logo}
            />
            <ActivityIndicator />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
})

export default Loading;