import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { 
    Image,
    StyleSheet
} from 'react-native'

function Panel(props){
    if (props.img){
        return(
            <Layout>
                <Image 
                    source={{uri: props.img}}
                />
            </Layout>
        )
    }
    return(
        <Layout>
            <Text>props.text</Text>
        </Layout>
    )   
}

const styles = StyleSheet.create({

})

export default Panel