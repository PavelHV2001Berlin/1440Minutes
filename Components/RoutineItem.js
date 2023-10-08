import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const ItemContainer = styled.View`
flex-direction: row;
gap: 25px;
padding-left: 25px;
align-items: center;
width: 100%;
height: 100px;
margin-top: 10px;
background-color: ${({ active, theme }) =>
active ? theme.colors.brand : theme.colors.color2};
`;
const ItemLayoutContainer = styled.View`

`;

export default function RoutineItem({name, startTime, numberOfActivities, duration, active}){
    return (
        <ItemContainer active={active}>
            <ItemLayoutContainer>
                <Text style={{color: "white", fontSize: 25, fontWeight: "bold"}}>{startTime}</Text>
            </ItemLayoutContainer>
            <ItemLayoutContainer>
               
                <Text style={{color: "white", fontSize: 25, fontWeight: "bold"}}>{name}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "white", fontSize: 15}}>{numberOfActivities} Activites</Text>
                    <Text style={{color: "white", fontSize: 15}}>{duration}min</Text>
                </View>
            
               
            </ItemLayoutContainer>
    
        </ItemContainer>
    )
}