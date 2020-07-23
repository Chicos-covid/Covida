import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const calcLeftTime = ({ duration, currentTime }) =>{
    const totalSeconds = (duration - currentTime);
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
        const string = number.toString();
        if (number < 10) {
            return `0${string}`;
        }
        return string;
    };
    return `${padWithZero(minutes)}:${padWithZero(seconds)}`;

}

function LeftTime(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{calcLeftTime(props)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 25,
        width: 50
    },
    texto: {
        flex: 1,
        fontSize: 14
    }    
})

export default LeftTime;