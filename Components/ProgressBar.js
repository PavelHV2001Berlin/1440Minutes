import {View, Text, StyleSheet, Animated, TouchableOpacity, Easing} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const Container = styled(Animated.View)`
flex: 1;
alignItems: center;
justifyContent: center;
backgroundColor: ${({theme}) => theme.colors.color1};
`
const Label = styled.Text`
fontSize: 25px;
fontWeight: bold;
color: ${({theme}) => theme.colors.textColor};
marginBottom: 20px;
`
const ProgressBG = styled(Animated.View)`
width: 90%;
height: 35px;
backgroundColor: #C4CDD5;
marginHorizontal: 25px;
borderRadius: 10px;
`
const Progress = styled(Animated.View)`
width: 50%;
height: 35px;
background-color:${({theme}) => theme.colors.brand};
borderRadius: 10px;
`
const ProgessBar = ({navigation}) => {
    const yearProgress = calculateYearProgress();

    const [progress, setProgress] = useState(yearProgress);
    const progressAnim = useRef(new Animated.Value(0)).current;
    const translateYAnim = useRef(new Animated.Value(-1000)).current; // Initial position off-screen

    const animateTranslateY = () => {
      Animated.timing(translateYAnim, {
        toValue: 0, // Move to the center
        duration: 1250,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start(()=>{ animateProgress();});
    };
   
    const animateProgress = () => {
      Animated.timing(progressAnim, {
        toValue: progress,
        duration: 1250,
        useNativeDriver: false,
      }).start(()=>{setTimeout(()=>{navigation.replace("Home")}, 250)});
    };

 
   
    useEffect(() => {
     
      animateTranslateY(); // Animate translateY when progress updates
      return () => {};
    }, [progress]);
   
    return (
      <Container style={[
        {
         
          transform: [{ translateY: translateYAnim }]
        }]}>
          
        <Label>2023 Progress {progress}%</Label>
   
        <ProgressBG
        >
          <Progress
            style={[
              
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
                
    
              },
            ]}
          />
        </ProgressBG>
      </Container>
    );
};
 
export default ProgessBar;

function calculateYearProgress() {
    const now = new Date(); // Aktuelles Datum und Uhrzeit
    const startOfYear = new Date(now.getFullYear(), 0, 1); // Erster Tag des aktuellen Jahres
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999); // Letzter Tag des aktuellen Jahres
  
    const elapsedMilliseconds = now - startOfYear;
    const yearMilliseconds = endOfYear - startOfYear;
  
    const progressPercentage = (elapsedMilliseconds / yearMilliseconds) * 100;
    
    return Math.floor(progressPercentage); // Auf die nächste ganze Zahl abrunden
}
