import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import entities from './entities';
import { GameEngine } from 'react-native-game-engine';
import Physics from './physics';

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  useEffect(() => {
    setRunning(true);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20}}>
        {currentPoints}
      </Text>
      <GameEngine
      ref={(ref) => {setGameEngine(ref)}}
      systems = {[Physics]}
      entities = {entities()}
      running = {running}
      onEvent={(e) => {
        switch(e.type) {
          case 'game_over':
            setRunning(false)
            gameEngine.stop();
            setCurrentPoints(0);
            break;
          case 'new_point':
            setCurrentPoints(currentPoints + 1);
            break;
        }
      }}
      style = {{
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
