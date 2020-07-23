function informationStatus(state = {}, action){
    console.log(state);
    switch(action.type){
        case 'SET_PERMISSION_STATUS': {
            return { ...state, locationPermission: action.payload.locationPermission, errorCredentials: false}
        }
        case 'LOG_IN': {
            if(action.payload.credentials.user === state.perfil.user
                && action.payload.credentials.password === state.perfil.password){
                return { ...state, newUserRegister: false, sessionStarted: true, errorCredentials: false}
            } else {
                return { ...state, sessionStarted: false, errorCredentials: true }
            }
        }
        case 'NEW_PERFIL':{
            return { ...state, newUserRegister: false, perfil: action.payload.newPerfil, sessionStarted: true, errorCredentials: false}
        }
        case 'NEW_USER': {
            return { ...state, newUserRegister: action.payload.newUser, sessionStarted: false, errorCredentials: false}
        }
        default:
            return state;
    }
}

export default informationStatus;