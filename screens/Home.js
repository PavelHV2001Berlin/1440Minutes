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
  const [currentTime, setCurrentTime] = useState("");
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date()
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedTime = `${formattedHours}:${formattedMinutes}`;

      setCurrentTime(formattedTime);

      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // Monate beginnen bei 0 (Januar) in JavaScript
      const year = currentDate.getFullYear();
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;
      setTodaysDate(formattedDate)
      // Beispielaufruf
      const isTimeInInterval = checkIfTimeInInterval("06:00", 123, "08:02");

    }, 1000); // Aktualisiere die Uhrzeit alle 1000 ms (1 Sekunde)

    
    return () => {
      clearInterval(interval); // Aufräumen beim Unmount
    };
  }, []);

  const daysOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const currentDate = new Date();
  let currentDayIndex = currentDate.getDay(); // Gibt den Index des aktuellen Tages zurück (0 für Sonntag, 1 für Montag, usw.)
  if(currentDayIndex === 0){
    currentDayIndex = 7
  }
  currentDayIndex-=1;
  console.log(currentDayIndex) 
  return (
      <Container>
        <TimeHeader>
            <TextElement>{currentTime}</TextElement>
            <TextElement>{todaysDate}</TextElement>
        </TimeHeader>
        <DaysContainer>
        {daysOfWeek.map((day, index) => (
        <DayElement key={day} active={index === currentDayIndex}>
          <DayText>{day}</DayText>
        </DayElement>
      ))}
          
        </DaysContainer>
       <H3>Plan for Today</H3>
       {routinen.map((routine) => {
     

        const isActive = checkIfTimeInInterval(routine.startTime, routine.durationTime, currentTime)
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

  function checkIfTimeInInterval(starttime, durationtime, currenttime) {
    // Wandele die Zeiten in Minuten um
    const startTimeInMinutes = convertToMinutes(starttime);
    const endTimeInMinutes = startTimeInMinutes + durationtime;
    const currentTimeInMinutes = convertToMinutes(currenttime);
  
    // Überprüfe, ob die currenttime innerhalb des Intervalls liegt
    return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;
  }
  
  // Hilfsfunktion zur Umwandlung von Uhrzeit in Minuten
  function convertToMinutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }
  