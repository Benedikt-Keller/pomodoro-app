import React from "react"
import { Button, View, StyleSheet} from "react-native"

type Props = {
    isTimerRunning: boolean;
    stopTimer: () => void;
    startTimer: () => void;
}
export const TimerStartStop: React.FC<Props> = ({ isTimerRunning, stopTimer, startTimer }) => {
    return (
        <Button 
        title={isTimerRunning ? "Stop" : "Start"} 
        onPress={() => {isTimerRunning ? stopTimer() : startTimer()}}></Button>
    )
}