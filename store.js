const { createStore } = require("redux")

// for redux
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducers/informationStatus'



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['newUserRegister']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)



export { store, persistor };