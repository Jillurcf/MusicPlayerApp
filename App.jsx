import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';
import { useSetupTrackPlayer } from './src/hooks/useSetupTrackPlayer.';


const App = () => {
  
  // useEffect( () => {
  //   setupPlayer();
  // }, []);

  // const setupPlayer = async () => {
  //   await TrackPlayer.setupPlayer();
  //   console.log("track player setup successfully...");
  // };
  const onLoad = () => {
    console.log("track player setup success...");
  }
useSetupTrackPlayer({onLoad});
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
      {/* <StackNavigation /> */}
      <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
