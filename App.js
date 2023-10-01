import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
const theme = {
  colors: {
    brand: '#6F43EC',
    color1: '#152434',
    color2: '#263544',
    color3: '#4A5867',
    color4: '#6B7987',
    textColor: '#F4F4F4',
   
  },
};

export default function App() {

  

  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1}}>
        <Home/>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  
    
  );
}

