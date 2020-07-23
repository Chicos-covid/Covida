import React, { Component } from 'react';

import { Layout, Card, Text, Button } from '@ui-kitten/components';
import {
    View,
    StyleSheet,
    Image,
    PermissionsAndroid
} from 'react-native';
import { connect } from 'react-redux'

class Welcome extends Component{
    requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "COVIDA+ permisos de ubicación",
                    message:
                        "COVIDA+ necesita acceder a su ubicación" +
                        " para brindar un servicio adecuado con su zona actual.",
                    buttonNeutral: "Peguntar después",
                    buttonNegative: "Cancelar",
                    buttonPositive: "Aceptar"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('u can connect');
                this.props.dispatch({
                    type: 'SET_PERMISSION_STATUS',
                    payload: {
                        locationPermission: true,
                    }
                })
        } else {
                console.log("Lacation permition failed");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    render(){
        return(
            <Layout style={styles.layout}>
                <View style={styles.cardTop}>
                    <View style={styles.header}>
                        <Image
                            style={styles.logo}
                            source={require('../../../../assets/logo.jpeg')}
                        />
                        <Text style={styles.welcomeText}>Bienvenido a COVIDA +</Text>
                    </View>
                </View>
                <Card style={styles.card}>
                    <View
                        style={styles.container}
                    >
                        <View>
                            <Image 
                                source={require('../../../../assets/005-stadistics.png')}
                            />
                        </View>
                        <View
                            style={styles.childCardRight}
                        >
                            <Text>
                                Los datos aquí proporcionados serán únicamente utilizados para fines estadísticos y de referencia para brindarte un mejor servicio.
                            </Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.card}>
                    <View
                        style={styles.container}
                    >
                        <View 
                            style={styles.childCardLeft}
                        >
                            <Text>
                                COVIDA + utiliza el GPS de tu dispositivo para saber tu ubicación, antes de comenzar verifica que la ubicación esté activada y acepta el acceso a la ubicación.
                            </Text>
                        </View>
                        <View>                       
                            <Image 
                                source={require('../../../../assets/003-coronavirus.png')}
                            />
                        </View>
                    </View>
                </Card>

                <View
                    style={{alignItems: "center"}}
                >
                    <Button 
                        onPress={this.requestLocationPermission}
                        style={styles.button}
                    >
                        Continuar
                    </Button>
                </View>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    layout:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    header: {
        alignItems: 'center'
    },
    logo: {
        width: 200, 
        height: 200, 
        resizeMode: 'contain',
    },
    welcomeText: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 18,
    },
    card: {
        marginTop: 10,
        justifyContent: 'center'
    },
    cardTop: {
        marginBottom: 30,
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    childCardLeft: {
        paddingRight: 10,
        width: 310,
    },
    childCardRight:{
        paddingLeft: 10,
        width: 310,
    },
    button: {
        width: 150,
        marginTop: 50,
    }

})

function mapaStateToProps(state){
    return {
        locationPermission: state.locationPermission
    }
}

export default connect(mapaStateToProps)(Welcome);