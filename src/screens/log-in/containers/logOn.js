import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    Text, 
    Input, 
    Layout, 
    Button, 
    Icon, 
    Select, 
    SelectItem, 
    Datepicker
} from '@ui-kitten/components'
import Header from '../../../sections/components/header'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import { ScrollView } from 'react-native'

class LogOn extends Component{
    state = {
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        user: '',
        password: '',
        confirmPass: '',
        gender: 'male',
        age: '',
        birth: '',
        secureTextEntry: true,
        status: 'basic',
        selectedIndex: 0,
        date: '',
    }
    AlertIcon = (props) => (
        <Icon {...props} name='alert-circle-outline' />
    );

    toggleSecureEntry = () => {
        this.setState({ secureTextEntry: !this.state.secureTextEntry });
    };
    renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={this.toggleSecureEntry}>
            <Icon {...props} name={this.state.secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );
    setSelectedIndex = (index) => {
        switch(index.row){
            case 0: {
                this.setState({
                    selectedIndex: index,
                    gender: 'male'
                })
                break
            }
            case 1: {
                this.setState({
                    selectedIndex: index,
                    gender: 'female'
                })
                break
            }
            case 2: {
                this.setState({
                    selectedIndex: index,
                    gender: 'S/E'
                })
                break
            }
        }
    }
    changeBirth = (birth) => {
        this.setState({
            birth,
            date: birth
        })
    }
    handleConfirmPassChange = (confirmPass) => {
        this.setState({
            confirmPass
        })
    } 
    verifyPass = () => {
        console.log(this.state);
        if(this.state.confirmPass == this.state.password){
            this.setState({status: 'success'})
        } else {
            this.setState({ status: 'danger' })
        }
    }
    submmit = () => {
        console.log(this.state);
        perfil = {
            nombre: this.state.nombre,
            apellidoP: this.state.apellidoP,
            apellidoM: this.state.apellidoM,
            user: this.state.user,
            password: this.state.password,
            gender: this.state.gender,
            age: this.state.age,
            birth: this.state.birth,
        }
        this.props.dispatch({
            type: 'NEW_PERFIL',
            payload: {
                ...perfil
            }
        })
    }
    render(){
        return(
            <ScrollView>
                <Layout style={styles.container}>
                    <Header />
                    <Layout 
                        level= '2'
                        style={styles.form}
                    >  
                        <Layout style={{padding: 15}}>
                            <Layout style={styles.input}>
                                <Input
                                    value={this.state.nombre}
                                    label='Nombre:'
                                    placeholder='Ingresa tu nombre'
                                    onChangeText={nextValue => this.setState({nombre: nextValue})}
                                />
                            </Layout>
                            <Layout style={styles.inputApellidos}>
                                <View style={styles.apellidos}>
                                    <Input
                                        value={this.state.apellidoP}
                                        label='Apellido Paterno:'
                                        onChangeText={nextValue => this.setState({ apellidoP: nextValue })}
                                    />
                                </View>
                                <View style={styles.apellidos}>
                                    <Input
                                        value={this.state.apellidoM}
                                        label='Apellido Materno:'
                                        onChangeText={nextValue => this.setState({ apellidoM: nextValue })}
                                    />
                                </View>
                            </Layout>
                            <Layout style={styles.input}>
                                <Select
                                    label='Sexo:'
                                    selectedIndex={this.state.selectedIndex}
                                    onSelect={this.setSelectedIndex}
                                >
                                    <SelectItem title='Hombre' />
                                    <SelectItem title='Mujer' />
                                    <SelectItem title='Sin especificar' />
                                </Select>
                            </Layout>
                            <Layout style={styles.inputApellidos}>
                                <View style={styles.apellidos}>
                                    <Datepicker 
                                        date={this.state.date}
                                        label='Fecha de nacimiento:'
                                        onSelect={this.changeBirth}
                                    />
                                </View>
                                <View style={styles.apellidos}>
                                    <Input
                                        value={this.state.age}
                                        label='Edad:'
                                        placeholder='Introduce edad.'
                                        onChangeText={nextValue => this.setState({age: nextValue})}
                                    />
                                </View>
                            </Layout>
                            <Layout style={styles.input}>
                                <Input 
                                    value={this.state.user}
                                    label='Nombre de Usuario:'
                                    placeholder='Ingresa tu nombre de usuario'
                                    onChangeText={nextValue => this.setState({user: nextValue})}
                                /> 
                            </Layout>
                            <Layout style={styles.input}>
                                <Input
                                    value={this.state.password}
                                    label='Contraseña'
                                    placeholder='Escriba su contraseña.'
                                    accessoryRight={this.renderIcon}
                                    captionIcon={this.AlertIcon}
                                    secureTextEntry={this.state.secureTextEntry}
                                    onChangeText={nextValue => this.setState({ password: nextValue })}
                                />
                            </Layout>
                            <Layout style={styles.input}>
                                <Input
                                    value={this.state.confirmPass}
                                    label='Confirmar contraseña'
                                    status={this.state.status}
                                    placeholder='Vuelva a escribir su contraseña.'
                                    captionIcon={this.AlertIcon}
                                    secureTextEntry={true}
                                    onSubmitEditing={this.verifyPass}
                                    onChangeText={this.handleConfirmPassChange}
                                />
                            </Layout>
                            <Layout
                                style={styles.formSubmmit}
                            >
                                <Button
                                    style={styles.button}
                                    onPress={this.submmit}
                                >
                                    Registrarme
                                </Button>
                            </Layout>
                        </Layout>
                    </Layout>
                </Layout>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: { 
        flex: 1,
        padding: 15,
    },
    input: {
        fontSize: 12,
        marginTop: 15,
    },
    inputApellidos: {
        fontSize: 14,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    apellidos:{
        width: 160,
    },
    formSubmmit: {
        alignItems: 'center',
    },
    button: {
        marginTop: 40
    }
})

export default connect(null)(LogOn)
