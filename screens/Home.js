import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';


const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.color1}; 
align-items: center;
flex-direction: column;
`
const TextElement = styled.Text`
color: ${({theme}) => theme.colors.textColor};
font-size: 22px;
font-weight: bold;
font-family: poppins;
`
const TimeHeader = styled.View`
padding-top: 50px;
padding-horizontal: 40px;
width: 100%;
flex-direction: row;
justify-content: space-between;
`
const DaysContainer = styled.View`
padding-horizontal: 40px;
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
color: ${({theme}) => theme.colors.textColor};
font-size: 20px;
`

export default function Home() {
    return (
      <Container>
        <TimeHeader>
            <TextElement>6:00</TextElement>
            <TextElement>27.09.2023</TextElement>
        </TimeHeader>
        <DaysContainer>
            <DayElement active={true}><DayText>MO</DayText></DayElement>
            <DayElement active={false}><DayText>TU</DayText></DayElement>
            <DayElement active={false}><DayText>WE</DayText></DayElement>
            <DayElement active={false}><DayText>TH</DayText></DayElement>
            <DayElement active={false}><DayText>FR</DayText></DayElement>
            <DayElement active={false}><DayText>SA</DayText></DayElement>
            <DayElement active={false}><DayText>SU</DayText></DayElement>
        </DaysContainer>
       
      </Container>
    );
  }