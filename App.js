//** Developed by Covida team **//
//** Version: 1.0 **//
//** Team: **//
//** Areli
//** Bruno
//** Donovan
//** Alberto
//** Jorge
//** This aplication is for the call for code hackton sponsored by IBM **//

import React from 'react';
import * as eva from '@eva-design/eva'; // ? Framework for design 
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text
} from '@ui-kitten/components' // ? Framework for design 
import { EvaIconsPack } from '@ui-kitten/eva-icons' // ? Framework for Icons

const HomeScreen = () => (
  <Layout
    style={styles.homeScreen}
  >
    <Text category='h1'>HOME</Text>
  </Layout>
);

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>    
  </>
);
