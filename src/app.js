//// background color blue = rgb(12, 69, 198)

import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
    PermissionsAndroid
} from 'react-native';

import Welcome from './screens/welcome/containers/welcome'
import StartSession from './screens/log-in/containers/startSession'
import MainPage from './screens/main/containers/index'
import { Text } from '@ui-kitten/components';
import LogOn from './screens/log-in/containers/logOn';

class AppLayout extends Component{
    async componentDidMount(){
        const permission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        this.props.dispatch({
            type: 'SET_PERMISSION_STATUS',
            payload: {
                locationPermission: permission,
            }
        })
    }

    render () {
        if(this.props.sessionStared){
            <MainPage />
        } else if (this.props.newUser) {
            return (
                <LogOn />
            )
        } else if(this.props.locationPermission) {
            return(
                <StartSession />
            )
        } else {
            return (
                <Welcome />
            )
        }
    }
}

function mapStateToProps(state){
    return {
        locationPermission: state.locationPermission,
        newUser: state.newUserRegister,
        sessionStared: state.sessionStared
    }
}

export default connect(mapStateToProps)(AppLayout)