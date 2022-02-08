import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import entities from './entities';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <GameEngine
      entitities = {entities()}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
      </GameEngine>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}
