import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    Text, 
    Layout 
} from '@ui-kitten/components';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../../../sections/components/header';
import Player from '../../../player/containers/player';
import Details from '../components/details';


class Index extends Component{
    render() {
        return(
            <Layout style={styles.container}>
                <Header>
                    <Text>Hola {this.props.porfile.user}</Text>
                </Header>
                <ScrollView>
                    <Player />
                    <Details 
                        title='Video de Introducción al Curso'
                        description_full= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    />
                </ScrollView>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

function mapStateToProps(state) {
    return {
        porfile: state.perfil
    }
}

export default connect(mapStateToProps)(Index);