import { Routine } from "../models/Routine";
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function AcitveRoutine({route}){
    const routine = route.params.routine
    return <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <Text>{routine.routineName}</Text>
        <Text>{routine.startTime}</Text>
    </View>
}