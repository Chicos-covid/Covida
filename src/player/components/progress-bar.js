import React from 'react';
import { Slider, View, StyleSheet } from 'react-native';


function ProgressBar(props){
    return (
        <View style={styles.conatiner}>
            <Slider
            value={props.value}
            style={styles.slider}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        height: 25,
        width: 250
    },
    slider: {
        flex: 1,
    }
})

export default ProgressBar;