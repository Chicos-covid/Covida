import React, { Component } from 'react';
import { 
    Text, 
    Layout, 
    Input, 
    Icon, 
    Button
} from '@ui-kitten/components';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

class LogInForm extends Component{
    state = {
        user: '',
        password: '',
        secureTextEntry: true
    }
    AlertIcon = (props) => (
        <Icon {...props} name='alert-circle-outline' />
    );

    toggleSecureEntry = () => {
        this.setState({secureTextEntry: !this.state.secureTextEntry});
    };
    renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={this.toggleSecureEntry}>
            <Icon {...props} name={this.state.secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );
    logIn = () => {
        console.log(
            'user: ' + this.state.user +
            '\n pass: ' + this.state.password
        );
    }
    render() {
        return (
            <Layout style={styles.container} >
                <Layout 
                    style={styles.input}
                >
                    <Input 
                        value={this.state.user}
                        label='Usuario'
                        placeholder='Ingrese su usuario.'
                        onChangeText={nextValue => this.setState({ user: nextValue })}
                    />
                </Layout>
                <Layout 
                    style={styles.input}
                >
                    <Input 
                        value={this.state.password}
                        label='Contraseña'
                        placeholder='Escriba su contraseña.'
                        accessoryRight={this.renderIcon}
                        captionIcon={this.AlertIcon}
                        secureTextEntry={this.state.secureTextEntry}
                        onChangeText={nextValue => this.setState({password: nextValue})}
                    />
                </Layout>
                <Layout
                    style={styles.submmitContainer}
                >
                    <Button
                        style={styles.submmit}
                        onPress={this.logIn}
                    >
                        Iniciar Sesión
                    </Button>
                </Layout>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        fontSize: 14,
        marginTop: 20,
    },
    submmitContainer:{
        alignItems: 'center',
        marginTop: 50,
    },
    submmit: {
        width: 200,
    }
})

export default connect(null)(LogInForm);