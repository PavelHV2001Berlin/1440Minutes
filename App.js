import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import ProgessBar from './Components/ProgressBar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import AcitveRoutine from './screens/ActiveRoutine';


const theme = {
  colors: {
    brand: '#6F43EC',
    color1: '#152434',
    color2: '#263544',
    color3: '#4A5867',
    color4: '#6B7987',
    color5: '#BFCCD9',
    textColor: '#F4F4F4',
   
  },
};
const Stack = createStackNavigator();

export default function App() {
 
  

  return (
    <NavigationContainer>
     <StatusBar hidden={true}/>
      <ThemeProvider theme={theme}>
        <View style={{flex: 1}}>
          <Stack.Navigator initialRouteName='SplashScreen'  screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='SplashScreen' component={ProgessBar}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ActiveRoutine' component={AcitveRoutine} screenOptions={{headerShown: true}}/>

          </Stack.Navigator>
        
        </View>
      </ThemeProvider>
      <StatusBar style="auto" />

    </NavigationContainer>
  
  
    
  );
}

