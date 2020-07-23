function informationStatus(state = {}, action){
    console.log(state);
    switch(action.type){
        case 'SET_PERMISSION_STATUS': {
            return {...state, locationPermission: action.payload.locationPermission}
        }
        case 'NEW_PERFIL':{
            return{...state, newUserRegister: false, perfil: action.payload.perfil, sessionStarted: true}
        }
        case 'NEW_USER': {
            return{...state, newUserRegister: action.payload.newUser}
        }
        default:
            return state;
    }
}

export default informationStatus;