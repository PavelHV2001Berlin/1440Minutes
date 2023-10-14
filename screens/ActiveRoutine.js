import { Routine } from "../models/Routine";
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Timer from "../Components/Timer";
import { useState } from "react";
import DialogNextActivity from "../Components/DialogNextActivity";


const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.color1}; 
align-items: center;
flex-direction: column;
padding-horizontal: 20px;
`
const ScreenHeader = styled.View`
flex-direction: row;
position: absolute;
width: 100%;
justify-content: center;
align-items: center;

margin-vertical: 20px;
` 
const NameHeader = styled.Text`
color: white;
font-size: 22px;
font-weight: bold;
text-align: center;

`
const BackIcon = styled(Icon)`
position: absolute;
left: 0px;
`
const MainContent = styled.View`
flex: 1;
align-items: center;
margin-vertical: 100px;
`
const CurrentActivityText = styled.Text`
color: ${({theme})=> theme.colors.textColor};
font-size: 36px;
font-weight: bold;
margin-top: 20px;
`
const NextActivityText = styled.Text`
color: ${({theme})=> theme.colors.color4};
font-size: 28px;
font-weight: bold;
margin-top: 10px;
`
const ActivityProgressText = styled.Text`
color: ${({theme})=> theme.colors.textColor};
font-size: 36px;
font-weight: bold;
margin-top: 26px;
`
export default function AcitveRoutine({route}){
    const routine = route.params.routine
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
    const [isDialogVisible, setDialogVisible] = useState(false);

    

    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };
    const startNextActivity = ()=>{
        setCurrentActivityIndex((currentIndex)=> currentIndex +1)
    }
    return <Container>
        <ScreenHeader>
            <BackIcon name="chevron-left" color={"white"} size={30}/>
            <NameHeader>{routine.routineName}</NameHeader>
        </ScreenHeader>
        <MainContent>
            <Timer timeInMinutes={routine.activities[currentActivityIndex].durationTime} showDialog={openDialog}/>
            
            
            <CurrentActivityText>{routine.activities[currentActivityIndex].activityName}</CurrentActivityText>
            <NextActivityText>{routine.activities[currentActivityIndex + 1].activityName}</NextActivityText>
            <ActivityProgressText>{currentActivityIndex+1}/{routine.activities.length}</ActivityProgressText>
            {/* <Text>{routine.startTime}</Text>
            {routine.activities.map((activity)=>(
                <Text>{activity.activityName}</Text>
            ))} */}
            <DialogNextActivity visible={isDialogVisible} currentActivity={routine.activities[currentActivityIndex].activityName} onClose={closeDialog} startNextActivity={startNextActivity}/>
        </MainContent>
   
    </Container>
}