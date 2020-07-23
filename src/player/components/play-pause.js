import React from 'react'
import { 
    TouchableHighlight, // ! Cuando tocas cambia de color
    TouchableOpacity, // ! Cundo tocas hace un destello
    TouchableWithoutFeedback, // ! Hace nada
    Text,
    StyleSheet
} from 'react-native';

function PlayPause (props) {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor='red'
            hitSlop={{ // !crea un área de touch alrededor de mi objeto yo indico el tamaño que quiero
                left: 5,
                top: 5,
                button: 5,
                right: 5
            }}
        >
            {
                props.paused ?
                    <Text style={styles.button}>Play</Text>
                :
                    <Text style={styles.button}>Pause</Text>
            }   
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#1666A5',
    }
})

export default PlayPause;