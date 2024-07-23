
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import RootStack from './src/navigators/RootStack';
// import { persistor, store } from './src/redux/store';
// import { COLORS } from './src/utils/constants/theme';

// console.disableYellowBox = true;
const App = () => {

  // useEffect(() => {

  //   // SplashScreen.hide();
  //   AvoidSoftInput.setEnabled(true);
  //   AvoidSoftInput.setShouldMimicIOSBehavior(true);
  //   return () => {
  //     AvoidSoftInput.setEnabled(false);
  //     AvoidSoftInput.setShouldMimicIOSBehavior(false);
  //   }

  // }, []);


  if (!Text.defaultProps) Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false

  return (
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
       
  );
};


export default App;

const styles = StyleSheet.create({

});
