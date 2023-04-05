import { sortRoutes } from 'expo-router/build/Route';
import { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TimerCountDisplay } from './TimerCountDisplay';
import { TimerStartStop } from './TimerStartStop';

const FOCUS_TIME_MINUTS = 0.2 * 60 * 1000;
const BREAK_TIME_MINUTS = 0.1 * 60 * 1000;

export default function TabOneScreen() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTS);
  const [isTimerRunning, setTimerRunning] = useState<boolean>(false);
  const [timerInterval, setTimerInveral] = useState<NodeJS.Timer | null>(null)
  const startTimer = () => {
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
    setTimerInveral(id)
    setTimerRunning(true)
  }
  const stopTimer = () => {
    if(timerInterval != null) {
      clearInterval(timerInterval)
      setTimerRunning(false)
    }
  }
  const timerDate = new Date(timerCount)
  useEffect(() => { 
    if (timerCount === 0) {
      stopTimer()
      setTimerCount(FOCUS_TIME_MINUTS)
    }
   }, [timerCount])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <TimerCountDisplay timerDate={new Date (timerCount)}></TimerCountDisplay>
      <TimerStartStop isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer}></TimerStartStop>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
