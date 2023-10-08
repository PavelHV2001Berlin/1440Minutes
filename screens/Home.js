import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import RoutineItem from '../Components/RoutineItem';
import routinen from '../database/database';
import { useEffect, useState } from 'react';


const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.color1}; 
align-items: center;
flex-direction: column;
padding-horizontal: 20px;
`
const TextElement = styled.Text`
color: ${({theme}) => theme.colors.textColor};
font-size: 22px;
font-weight: bold;
`
const TimeHeader = styled.View`
padding-top: 50px;
width: 100%;
flex-direction: row;
justify-content: space-between;
`
const DaysContainer = styled.View`
margin-top: 20px;
flex-direction: row;
justify-content: space-between;
width: 100%;
`
const DayElement = styled.View`
  border: 1px solid #4A5867;
  border-radius: 300px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.brand : theme.colors.color2};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
const DayText = styled.Text`
color: ${({theme}) => theme.colors.color5};
font-size: 20px;
`;
const H3 = styled.Text`
margin-top: 27px;
color: white;
font-weight: bold;
font-size: 22px;
`;

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Aktualisiere die Uhrzeit alle 1000 ms (1 Sekunde)

    return () => {
      clearInterval(interval); // Aufräumen beim Unmount
    };
  }, []);
    return (
      <Container>
        <TimeHeader>
            <TextElement>6:00</TextElement>
            <TextElement>27.09.2023</TextElement>
        </TimeHeader>
        <DaysContainer>
            <DayElement active><DayText>MO</DayText></DayElement>
            <DayElement><DayText>TU</DayText></DayElement>
            <DayElement><DayText>WE</DayText></DayElement>
            <DayElement><DayText>TH</DayText></DayElement>
            <DayElement><DayText>FR</DayText></DayElement>
            <DayElement><DayText>SA</DayText></DayElement>
            <DayElement><DayText>SU</DayText></DayElement>
        </DaysContainer>
       <H3>Plan for Today</H3>
       {routinen.map((routine) => {
        const routineStartTime = new Date(`2023-10-08T${routine.startTime}:00`);
        console.log("starttime: "+routineStartTime)
        const routineEndTime = new Date(routineStartTime.getTime() + routine.durationTime * 60000); // Umrechnung von Minuten in Millisekunden
        console.log("endtime: "+routineEndTime)

        const isActive = currentTime >= routineStartTime && currentTime <= routineEndTime;

        return (
          <RoutineItem
            key={routine.routineName}
            name={routine.routineName}
            startTime={routine.startTime}
            numberOfActivities={routine.activities.length}
            duration={routine.durationTime}
            active={isActive}
          />
        );
      })}
       {/* <RoutineItem name="Training" startTime={"06:30"} numberOfActivities={2} duration={90}/>
       <RoutineItem name="Arbeit" startTime={"08:00"} numberOfActivities={1} duration={120}/>
       <RoutineItem name="Morgen Routine" startTime={"19:00"} numberOfActivities={5} duration={60}/> */}

      </Container>
    );
  }