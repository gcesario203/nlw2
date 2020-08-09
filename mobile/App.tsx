import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo'
import AppStack from './src/routes/AppStack'

import {useFonts, Archivo_700Bold, Archivo_400Regular} from '@expo-google-fonts/archivo'
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins'

export default function App() {

  let [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Archivo_400Regular,
    Poppins_400Regular,
    Poppins_600SemiBold
  })


  if (!fontsLoaded) {
    return <AppLoading></AppLoading>
  } else {
    return (
      <>
        <AppStack></AppStack>
        <StatusBar style="light"></StatusBar>
      </>
    );
  }
}
