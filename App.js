import React from 'react';
import {NavigationContainer} from 'react-native';
import HomeStackNavigator from './src/navigations/Navigator';

const App = ()=>{
  return(
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  )
}

export default App;