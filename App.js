//** Developed by Covida team **//
//** Version: 1.0 **//
//** Team: **//
//** Areli
//** Bruno
//** Donovan
//** Alberto
//** Jorge
//** This aplication is for the call for code hackton sponsored by IBM **//

import React, { Component } from 'react';
import * as eva from '@eva-design/eva'; // ? Framework for design 
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components' // ? Framework for design 
import { EvaIconsPack } from '@ui-kitten/eva-icons' // ? Framework for Icons
import { default as theme } from './custom-theme.json' 

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'

import Loading from './src/sections/components/loading'
import AppLayout from './src/app'

class App extends Component<Props>{
  render() {
    return(
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
          <Provider
            store={store}
          >
            <PersistGate
              loading={<Loading />}
              persistor={persistor}
            >
              <AppLayout />
            </PersistGate>
          </Provider>
        </ApplicationProvider>
      </>
    )
  };
}


export default App;