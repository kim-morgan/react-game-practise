import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import entities from './entities';
import { GameEngine } from 'react-native-game-engine';
import Physics from './physics';

export default function App() {
  const [running, setrunning] = useState(false);
  return (
    <View style={{flex: 1}}>
      <GameEngine
      systems={[Physics]}
      entities = {entities()}
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
