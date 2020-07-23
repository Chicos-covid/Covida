import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Layout } from '@ui-kitten/components'
import Header from '../../../sections/components/header'
import LogInForm from './logInForm'
import { StyleSheet, TouchableOpacity } from 'react-native'



class StartSession extends Component{
    registrarse = () => {
        this.props.dispatch({
            type: 'NEW_USER',
            payload: {
                newUser: true,
            }
        })
    }
    render() {
        return (
            <Layout style={styles.container}>
                <Header />
                <Layout 
                    level='2' 
                    style={styles.form}
                >
                    <LogInForm />
                    <TouchableOpacity
                        onPress={this.registrarse}
                    >
                        <Layout
                            style={styles.registerContainer}
                        >
                            <Text style={styles.text}>Registrarse</Text>
                        </Layout>
                    </TouchableOpacity>
                </Layout>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        flex:1,
        padding: 15
    },
    registerContainer: {
        paddingVertical: 10,
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        color: "#1666A5"
    }
})

export default connect(null)(StartSession)