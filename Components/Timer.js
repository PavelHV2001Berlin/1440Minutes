import {View, Text, StyleSheet, Animated, TouchableOpacity, Easing} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const TimerContainer = styled.View`
border: 6px dashed ${({theme})=> theme.colors.brand};
min-width: 280px;
min-height: 280px;
border-radius: 1000px;
align-items: center; 
justify-content: center;
`
const TimerText = styled.Text`
    color: ${({theme})=> theme.colors.textColor};
    font-size: 82px;
`;

const Timer = ({ timeInMinutes, showDialog }) => {
    const [time, setTime] = useState(timeInMinutes * 60); // Zeit in Sekunden
    const [formattedTime, setFormattedTime] = useState(formatTime(time));
  
    // Funktion zur Formatierung der verbleibenden Zeit
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
          setFormattedTime(formatTime(time - 1));
        }else{
            //wecker klingeln, dielog fenster öffnen
            showDialog()
            clearInterval(timer)
        }
      }, 1000);
  
      // Aufräumen des Timers, wenn das Komponenten unmontiert wird
      return () => clearInterval(timer);
    }, [time]);
   
  
    return (
      <TimerContainer>
        <TimerText>{formattedTime}</TimerText>
      </TimerContainer>
    );
  };
  
  export default Timer;